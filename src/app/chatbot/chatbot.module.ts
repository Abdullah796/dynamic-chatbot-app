import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatbotListComponent } from './chatbot-list/chatbot-list.component';
import { ChatbotFormComponent } from './chatbot-form/chatbot-form.component';



@NgModule({
  declarations: [
    ChatbotListComponent,
    ChatbotFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ChatbotModule { }
