import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-message-room',
  templateUrl: './message-room.component.html',
  styleUrls: ['./message-room.component.scss']
})
export class MessageRoomComponent implements OnInit {
  public text: string = '';
  public user: any[] = [];
  constructor(private chatService: WebsocketService) { }

  ngOnInit(): void {
    this.chatService.getMessage().subscribe((data) => {
      this.user = data;
      console.log(this.user[0]);
    });
  }

  sendMessage(): void {
    this.chatService.sendMessage({
      username: 'Usuario Root',
      room: '01',
      message: this.text
    })

    this.text = '';
  }

}
