import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-message-room',
  templateUrl: './message-room.component.html',
  styleUrls: ['./message-room.component.scss']
})
export class MessageRoomComponent implements OnInit {

  constructor(private chatService: WebsocketService) { }

  ngOnInit(): void {
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      user: 'root',
      room: '01',
      message: 'Hello world!'
    })
  }

}
