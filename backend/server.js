const http = require('http');
const app = require('./src/app');
const socketIo = require("socket.io");
const port = process.env.PORT || 3000;



const server= http.createServer(app);
const io = socketIo(server, {
    cors: {
      origin: "*",  // Change this to frontend URL in production
      methods: ["GET", "POST"],
    },
  });
  io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
  
    socket.on("disconnect", () => {
      console.log("A user disconnected:", socket.id);
    });
  });
  app.set("io", io);

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});