import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageRoomComponent } from './components/message-room/message-room.component';
import { RecentConversationsComponent } from './components/recent-conversations/recent-conversations.component';

import { AccordionModule } from 'primeng/accordion';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MessageRoomComponent,
    RecentConversationsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
