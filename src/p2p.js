// yarn add ws

const webSockets = require("ws");

const sockets = [];

const startP2PServer = server => {
    const webServer = new webSockets.Server({server});
    webServer.on("connection", ws => {
        console.log(`Hello ${ws}`);
    });
    console.log("Nomadcoin HTTP P2P Server Running!");
};


module.exports = {
    startP2PServer
}