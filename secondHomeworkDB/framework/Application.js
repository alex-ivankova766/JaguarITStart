const http = require('http');
const EventEmitter = require('events');

module.exports = class Application {
    constructor() {
        this.emitter = new EventEmitter();
        this.server = this._createServer();
        this.middlewares = [];
    }

    use(middleware) {
        this.middlewares.push(middleware);
    }

    _createServer() {
            return http.createServer((req, res) => {
                
            this.middlewares.forEach(middleware => middleware(req, res));

            req.on('end', () => {
                const emitted = this.emitter.emit(this._getRouteMask(req.pathname, req.method), req, res)
                if (!emitted) {
                    res.end()
                }
            })
        })
    }

    addRouter(router) {
        Object.keys(router.endpoints).forEach(path => {
            const endpoint = router.endpoints[path];
            Object.keys(endpoint).forEach((method) => {
                this.emitter.on(this._getRouteMask(path, method), (req, res) => {
                    const handler = endpoint[method];
                    handler(req, res);
                })
            })
        })
    }

    listen(port, callback) {
        this.server.listen(port, callback);
    }

    _getRouteMask(path, method) {
        return `[${path}]:[${method}]`;
    }
}