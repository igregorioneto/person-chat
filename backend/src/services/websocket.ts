import { io } from '../http';

interface RoomUsers {
    socket_id: string,
    username: string,
    room: string
}

const users = [];
const messages = [];

io.on("connection", socket => {
    socket.on("select_room", (data) => {
        
        socket.join(data.room);

        const userIrRoom = users.find(user => user.username === data.username && user.room === data.room);

        if (userIrRoom) {
            userIrRoom.socket_id = socket.id;
        } else {
            users.push({
                room: data.room,
                username: data.username,
                socket_id: socket.id
            });
        }

        console.log(users);

    });

    socket.on("message", (data) => {
        const message = {
            room: data.room,
            username: data.username,
            text: data.message,
            createdAt: new Date()
        }

        messages.push(message);
        console.log(messages);
    });

    socket.emit("message", messages);
});