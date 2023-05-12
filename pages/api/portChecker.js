const net = require('net');

const { Socket } = net;
const MAX_PORT = 65535;

const checkPort = (port, host, timeout) => new Promise(resolve => {
    const socket = new Socket();
    const resolveResult = (result = false) => () => {
        socket.destroy();
        resolve(result);
    }
    socket.on('connect', resolveResult(true));
    socket.on('timeout', resolveResult());
    socket.on('error', resolveResult());
    socket.on('close', resolveResult());

    socket.setTimeout(timeout);
    socket.connect(port, host);
}).catch(console.error);

const scanAvailablePorts = async (host, timeout) => {
    if(!host) return;
    const portsMap = [];
    let promises = [];

    for(let i = 0; i <= MAX_PORT; i++) {
        promises.push(checkPort(i, host, timeout)
            .then(result => portsMap[i] = result));
    }

    await Promise.all(promises);

    return portsMap.reduce((acc, val, index) => {
            if(!val) return acc;
            acc.push(index);
            return acc;
        },
        []);
}
module.exports = { scanAvailablePorts };



