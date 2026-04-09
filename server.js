'use strict';

const http = require('http');
const fs   = require('fs');
const path = require('path');

const DATA_FILE = path.join(__dirname, 'data.json');
const THUMB_DIR = path.join(__dirname, 'thumb');
const PORT      = process.env.PORT || 3000;

// ── MIME types for static files ───────────────────────────────────────────────
const MIME = {
    '.html': 'text/html; charset=utf-8',
    '.css':  'text/css; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.json': 'application/json; charset=utf-8',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.ico':  'image/x-icon',
};

// ── helpers ───────────────────────────────────────────────────────────────────
function readData() {
    try { return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8')); }
    catch { return { swatches: [], groups: [], lastModified: Date.now() }; }
}

function writeData(data) {
    data.lastModified = Date.now();
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
}

function readBody(req) {
    return new Promise(function (resolve, reject) {
        const chunks = [];
        req.on('data', function (c) { chunks.push(c); });
        req.on('end',  function ()  { resolve(Buffer.concat(chunks).toString('utf8')); });
        req.on('error', reject);
    });
}

function send(res, status, body, type) {
    const buf = typeof body === 'string' ? Buffer.from(body) : body;
    res.writeHead(status, {
        'Content-Type':   type || 'application/json; charset=utf-8',
        'Content-Length': buf.length,
        'Cache-Control':  'no-cache',
    });
    res.end(buf);
}

function sendJSON(res, status, obj) {
    send(res, status, JSON.stringify(obj));
}

// ── static file server ────────────────────────────────────────────────────────
function serveStatic(req, res) {
    let urlPath = req.url.split('?')[0];
    if (urlPath === '/') urlPath = '/index.html';
    const filePath = path.join(__dirname, urlPath);

    // Safety: stay inside project dir
    if (!filePath.startsWith(__dirname)) {
        sendJSON(res, 403, { error: 'forbidden' });
        return;
    }

    fs.readFile(filePath, function (err, data) {
        if (err) { sendJSON(res, 404, { error: 'not found' }); return; }
        const ext  = path.extname(filePath);
        const mime = MIME[ext] || 'application/octet-stream';
        send(res, 200, data, mime);
    });
}

// ── request router ────────────────────────────────────────────────────────────
const server = http.createServer(function (req, res) {
    const url    = req.url.split('?')[0];
    const method = req.method;

    // GET /api/data
    if (method === 'GET' && url === '/api/data') {
        sendJSON(res, 200, readData());
        return;
    }

    // POST /api/swatches  — create one swatch (with thumbData)
    if (method === 'POST' && url === '/api/swatches') {
        readBody(req).then(function (raw) {
            const swatch   = JSON.parse(raw);
            const thumbData = swatch.thumbData;
            delete swatch.thumbData;

            if (thumbData && thumbData.startsWith('data:image/png;base64,')) {
                const b64      = thumbData.split(',')[1];
                const filename = swatch.id + '.png';
                fs.writeFileSync(path.join(THUMB_DIR, filename), Buffer.from(b64, 'base64'));
                swatch.thumb = 'thumb/' + filename;
            }

            const data = readData();
            data.swatches.unshift(swatch);
            writeData(data);
            sendJSON(res, 200, { ok: true, thumb: swatch.thumb });
        }).catch(function (e) { sendJSON(res, 400, { error: String(e) }); });
        return;
    }

    // DELETE /api/swatches/:id
    if (method === 'DELETE' && url.startsWith('/api/swatches/')) {
        const id   = decodeURIComponent(url.slice('/api/swatches/'.length));
        const data = readData();
        const idx  = data.swatches.findIndex(function (s) { return s.id === id; });
        if (idx !== -1) {
            const removed = data.swatches.splice(idx, 1)[0];
            if (removed.thumb && !removed.thumb.startsWith('data:')) {
                const fp = path.join(__dirname, removed.thumb);
                if (fs.existsSync(fp)) fs.unlinkSync(fp);
            }
        }
        writeData(data);
        sendJSON(res, 200, { ok: true });
        return;
    }

    // PATCH /api/swatches/:id  — update name / groupId
    if (method === 'PATCH' && url.startsWith('/api/swatches/')) {
        const id = decodeURIComponent(url.slice('/api/swatches/'.length));
        readBody(req).then(function (raw) {
            const patch  = JSON.parse(raw);
            const data   = readData();
            const swatch = data.swatches.find(function (s) { return s.id === id; });
            if (swatch) Object.assign(swatch, patch);
            writeData(data);
            sendJSON(res, 200, { ok: true });
        }).catch(function (e) { sendJSON(res, 400, { error: String(e) }); });
        return;
    }

    // PUT /api/swatches  — bulk replace
    if (method === 'PUT' && url === '/api/swatches') {
        readBody(req).then(function (raw) {
            const data    = readData();
            data.swatches = JSON.parse(raw);
            writeData(data);
            sendJSON(res, 200, { ok: true });
        }).catch(function (e) { sendJSON(res, 400, { error: String(e) }); });
        return;
    }

    // PUT /api/groups  — full replace
    if (method === 'PUT' && url === '/api/groups') {
        readBody(req).then(function (raw) {
            const data   = readData();
            data.groups  = JSON.parse(raw);
            writeData(data);
            sendJSON(res, 200, { ok: true });
        }).catch(function (e) { sendJSON(res, 400, { error: String(e) }); });
        return;
    }

    // Static files
    serveStatic(req, res);
});

server.listen(PORT, function () {
    console.log('Weave server running on http://localhost:' + PORT);
});
