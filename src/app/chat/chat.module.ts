import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatFormComponent } from './chat-form/chat-form.component';



@NgModule({
  declarations: [
    ChatListComponent,
    ChatFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatModule { }
