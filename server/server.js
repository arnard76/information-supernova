// express imports
import express from "express";
import cors from "cors";
import { apiRouter } from "./api.js";

// socket.io web sockets imports
import { createServer } from "http";
import { Server } from "socket.io";
import path from "path";

const port = process.env.PORT || 5000;
const app = express();
const server = createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(cors());
app.use("/api", apiRouter);
app.use(express.static("frontend/public/index.html"));

io.on("connection", (socket) => {
  console.log("A user has connected");
  io.emit("Hello");
  socket.on("message", (summaries) => {
    console.log(summaries);
    io.emit("message", "hey");
  });
});

server.listen(port, () => {
  console.log(`Server is up at port ${port}`);
});
