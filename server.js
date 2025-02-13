const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 }, () => {
    console.log("WebSocket server started on port 8080");
});

wss.on("connection", (ws) => {
    console.log("New client connected");

    ws.on("message", (message) => {
        console.log(`Received message: ${message}`);

        // Send the received message back to the client
        ws.send(`Server: ${message}`);
    });

    ws.on("close", () => {
        console.log("Client disconnected");
    });

    ws.onerror = (error) => {
        console.error("WebSocket error:", error);
    };
});
