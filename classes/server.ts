import http from "http";

import express from "express";
import socketIO from "socket.io";

import { SERVER_PORT } from "../global/environment";
import * as socket from "../sockets/socket";

export default class Server {
  private static _instance: Server;
  public app: express.Application;
  public port: number;
  public io: socketIO.Server;
  private httpServer: http.Server;

  private constructor() {
    this.app = express();
    this.port = SERVER_PORT;
    this.httpServer = new http.Server(this.app);
    this.io = socketIO(this.httpServer);
    this.listenSockets();
  }

  public static get instance() {
    return this._instance || (this._instance = new this());
  }

  private listenSockets() {
    console.log("Listening on conections - sockets");
    this.io.on("connection", client => {
      console.log(`Client ${client.id} connected`);
      
      // Desconectar
      socket.disconnect(client);
      socket.message(client, this.io);
    });
  }

  start(callback: () => void) {
    this.httpServer.listen(this.port, callback);
  }
}
