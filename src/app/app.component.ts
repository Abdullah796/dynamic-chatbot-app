import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedChatbotName: string = "Ned Admission FAQs";
  selectedChatbotAvatar: string = "https://bootdey.com/img/Content/avatar/avatar1.png";
  nedAdmissionDialogues: any = [
    {
      "type": "user",
      "question": "How are you?"
    },
    {
      "type": "chatbot",
      "retrievedAnswer": "I am fine"
    }
  ];

  covidDialogues: any = [
    {
      "type": "user",
      "question": "Hey"
    },
    {
      "type": "chatbot",
      "retrievedAnswer": "Hey"
    }
  ];

  nedAdmissionFaqSelected() {
    this.selectedChatbotName = "Ned Admission FAQs";
    this.selectedChatbotAvatar = "https://bootdey.com/img/Content/avatar/avatar1.png";
    // console.log("ned admission Faq selected");
  }

  covidFaqSelected() {
    this.selectedChatbotName = "Covid FAQs";
    this.selectedChatbotAvatar = "https://bootdey.com/img/Content/avatar/avatar2.png";
    // console.log("covid Faq selected");
  }
}
