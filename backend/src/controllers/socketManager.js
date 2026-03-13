import {Server} from "socket.io";


export const connectToServer=(server)=>{
    const socketserver=new Server(server);
    return socketserver;
}