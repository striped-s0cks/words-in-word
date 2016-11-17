import nodeStatic from 'node-static';
import http       from 'http';

let server;
let file;

function start(args, cb) {
    file = new nodeStatic.Server('./public');

    server = http.createServer( (request, response) => {
        request.addListener('end', () => {
            file.serve(request, response);
        }).resume();
    });

    server.listen(args.port);
    if (cb) return cb();
}

function stop(cb) {
    server.close();
    if (cb) return cb();
}

module.exports = {
    start,
    stop
};
