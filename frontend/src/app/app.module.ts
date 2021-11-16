import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageRoomComponent } from './components/message-room/message-room.component';
import { RecentConversationsComponent } from './components/recent-conversations/recent-conversations.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageRoomComponent,
    RecentConversationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
