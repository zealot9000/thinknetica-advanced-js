const WebSocket = require("ws");
const wsConnection = new WebSocket.Server({ port: 8080 });

const clients = new Set();

class User {
    constructor(connection) {
        this.connection = connection;
        this.name = null;
        this._channels = new Set();
    }

    loginChannel(channelName) {
        this._channels.add(channelName);
    }

    logoutChannel(channelName) {
        this._channels.delete(channelName);
    }

    isLoggedIn(channelName) {
        return this._channels.has(channelName);
    }
}

wsConnection.on("connection", ws => {
    const user = new User(ws);
    clients.add(user);

    user.connection.on("message", function (data) {
        const message = JSON.parse(data);

        switch (message.command) {
        case "login":
            user.loginChannel(message.channel);
            user.name = message.username;

            if (user.isLoggedIn(message.channel)) {
            user.connection.send('You are connection on channel ' + message.channel)
            }
            return;
        case "logout":
            if (user.isLoggedIn(message.channel)) {
            user.logoutChannel(message.channel);

            for (let client of clients) {
                if (client.isLoggedIn(message.channel)) {
                client.connection.send(`${Date.now()} ${user.name}: user is logout chanel`)
                }
            }
            }
            return;
        case "sendMessage":
            if (user.isLoggedIn(message.channel)) {
            for (let client of clients) {
                if (client.isLoggedIn(message.channel)) {
                client.connection.send(`${Date.now()} ${user.name}: ${message.text}`)
                }
            }
            } else {
            user.connection.send('You are not connection on channel ' + message.channel)
            }
            return;
        case "exitChat":
            clients.delete(user);
            return;
        default:
            ws.send("Unknown command");
            return;
    }
  });

    user.connection.on("close", function () {
        clients.delete(user);
    });
});
