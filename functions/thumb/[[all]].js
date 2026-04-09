'use strict';

// Serves /thumb/* — checks KV first (user-added), then falls back to static file (defaults)
// KV binding: SWATCH_KV

export async function onRequest(context) {
    const { request, env, params } = context;
    const kvKey = 'thumb/' + params.all; // e.g. 'thumb/uuid.png'

    if (env.SWATCH_KV) {
        const val = await env.SWATCH_KV.get(kvKey, { type: 'arrayBuffer' });
        if (val) {
            return new Response(val, {
                headers: {
                    'Content-Type':  'image/png',
                    'Cache-Control': 'public, max-age=31536000',
                },
            });
        }
    }

    // Fall back to the committed static file in thumb/
    return env.ASSETS.fetch(request);
}
