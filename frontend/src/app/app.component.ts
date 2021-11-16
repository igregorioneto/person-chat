import { Component, OnInit } from '@angular/core';
import { Socket } from 'socket.io';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  socket = io;

  ngOnInit() {
    this.socket.emit("message", {

    });
  }
}
