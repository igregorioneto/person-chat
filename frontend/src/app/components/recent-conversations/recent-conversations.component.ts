import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';

@Component({
  selector: 'app-recent-conversations',
  templateUrl: './recent-conversations.component.html',
  styleUrls: ['./recent-conversations.component.scss']
})
export class RecentConversationsComponent implements OnInit {

  constructor(private chatService: WebsocketService) { }

  ngOnInit(): void {
  }

  selectRoom(value: any): void {
    this.chatService.sendRoom({
      username: 'Usuario Root',
      room: value.target.outerText
    })
    console.log(value.target.outerText);
  }

}
