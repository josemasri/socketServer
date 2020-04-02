import { Socket } from "socket.io";

export const disconnect = (client: Socket) => {
  client.on("disconnect", () => {
    console.log(`Client ${client.id} disconnected`);
  });
};

// Escuchar mensajes
export const message = (client: Socket, io: SocketIO.Server) => {
  client.on("message", (payload: { de: string; cuerpo: string }, callback) => {
    console.log(`Message recived from ${client.id}`, payload);
    io.emit('new-message', payload);
  });
};
