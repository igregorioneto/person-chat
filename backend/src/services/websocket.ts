import { io } from '../http';

io.on("connection", socket => {
    socket.on("message", (data) => {
        console.log(data);
    });
});