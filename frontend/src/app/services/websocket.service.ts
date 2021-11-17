import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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
  }

  sendMessage(data: any): void {
    this.socket.emit('message', data);
  }

  sendRoom(data: any): void {
    this.socket.emit('select_room', data);
  }

  getMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', (data) => {
        observer.next(data);
      });

      return () => {
        this.socket.disconnect();
      }
    });
  }

}
