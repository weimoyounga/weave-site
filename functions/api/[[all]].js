'use strict';

// Cloudflare Pages Function — handles all /api/* routes
// KV binding: SWATCH_KV  (configure in Pages → Settings → Functions → KV bindings)

export async function onRequest(context) {
    const { request, env } = context;
    const url    = new URL(request.url);
    const method = request.method;
    const seg    = url.pathname.replace(/^\/api\//, ''); // e.g. 'data', 'swatches', 'swatches/uuid'

    const corsHeaders = {
        'Access-Control-Allow-Origin':  '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
    };

    if (method === 'OPTIONS') {
        return new Response(null, { status: 204, headers: corsHeaders });
    }

    function json(obj, status) {
        return Response.json(obj, { status: status || 200, headers: corsHeaders });
    }

    // ── KV helpers ────────────────────────────────────────────────────────────
    async function getData() {
        const raw = await env.SWATCH_KV.get('swatch_data');
        if (raw) return JSON.parse(raw);
        // First run: initialise from committed data.json
        const resp    = await env.ASSETS.fetch(new Request(new URL('/data.json', url).href));
        const initial = await resp.json();
        await env.SWATCH_KV.put('swatch_data', JSON.stringify(initial));
        return initial;
    }

    async function putData(data) {
        data.lastModified = Date.now();
        await env.SWATCH_KV.put('swatch_data', JSON.stringify(data));
    }

    // ── Routes ────────────────────────────────────────────────────────────────

    // GET /api/data
    if (method === 'GET' && seg === 'data') {
        return json(await getData());
    }

    // POST /api/swatches — create swatch (with thumbData)
    if (method === 'POST' && seg === 'swatches') {
        const body      = await request.json();
        const thumbData = body.thumbData;
        delete body.thumbData;

        if (thumbData && thumbData.startsWith('data:image/png;base64,')) {
            const b64    = thumbData.split(',')[1];
            const binary = Uint8Array.from(atob(b64), function (c) { return c.charCodeAt(0); });
            const kvKey  = 'thumb/' + body.id + '.png';
            await env.SWATCH_KV.put(kvKey, binary.buffer);
            body.thumb = kvKey;
        }

        const data = await getData();
        data.swatches.unshift(body);
        await putData(data);
        return json({ ok: true, thumb: body.thumb });
    }

    // DELETE /api/swatches/:id
    if (method === 'DELETE' && seg.startsWith('swatches/')) {
        const id   = seg.slice('swatches/'.length);
        const data = await getData();
        const idx  = data.swatches.findIndex(function (s) { return s.id === id; });
        if (idx !== -1) {
            const removed = data.swatches.splice(idx, 1)[0];
            if (removed.thumb && !removed.thumb.startsWith('data:')) {
                await env.SWATCH_KV.delete(removed.thumb).catch(function () {});
            }
        }
        await putData(data);
        return json({ ok: true });
    }

    // PATCH /api/swatches/:id — update name / groupId
    if (method === 'PATCH' && seg.startsWith('swatches/')) {
        const id   = seg.slice('swatches/'.length);
        const body = await request.json();
        const data = await getData();
        const sw   = data.swatches.find(function (s) { return s.id === id; });
        if (sw) Object.assign(sw, body);
        await putData(data);
        return json({ ok: true });
    }

    // PUT /api/swatches — bulk replace (group-delete reassignment)
    if (method === 'PUT' && seg === 'swatches') {
        const data    = await getData();
        data.swatches = await request.json();
        await putData(data);
        return json({ ok: true });
    }

    // PUT /api/groups — full replace
    if (method === 'PUT' && seg === 'groups') {
        const data  = await getData();
        data.groups = await request.json();
        await putData(data);
        return json({ ok: true });
    }

    return json({ error: 'not found' }, 404);
}
