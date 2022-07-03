import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { ChatFormComponent } from './chat/chat-form/chat-form.component';
import { ChatListComponent } from './chat/chat-list/chat-list.component';
import { ChatbotFormComponent } from './chatbot/chatbot-form/chatbot-form.component';
import { ChatbotListComponent } from './chatbot/chatbot-list/chatbot-list.component';
import { DialogueFormComponent } from './dialogue/dialogue-form/dialogue-form.component';
import { DialogueListComponent } from './dialogue/dialogue-list/dialogue-list.component';
import { PrivateLayoutComponent } from './layout/private-layout/private-layout.component';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { ReviewFormComponent } from './review/review-form/review-form.component';
import { ReviewListComponent } from './review/review-list/review-list.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { UserListComponent } from './user/user-list/user-list.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: 'sign-in', component: SignInComponent },
      { path: 'sign-up', component: SignUpComponent }
    ]
  },
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      { path: 'chat-form', component: ChatFormComponent },
      { path: 'chat-list', component: ChatListComponent },
      { path: 'chatbot-form', component: ChatbotFormComponent },
      { path: 'chatbot-list', component: ChatbotListComponent },
      { path: 'dialogue-form', component: DialogueFormComponent },
      { path: 'dialogue-list', component: DialogueListComponent },
      { path: 'review-form', component: ReviewFormComponent },
      { path: 'review-list', component: ReviewListComponent },
      { path: 'user-form', component: UserFormComponent },
      { path: 'user-list', component: UserListComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
