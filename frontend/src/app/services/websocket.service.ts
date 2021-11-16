import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {

  private socket: Socket;
  private url = environment.url;

  constructor(){
    this.socket = io(this.url, { transports: ['websocket', 'polling', 'flashsocket'] });
    this.socket.emit('message', {
      message: 'carregado'
    });
  }

  
  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }
}
