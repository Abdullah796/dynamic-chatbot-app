import { Component, OnInit } from '@angular/core';
import { ChatbotService } from './_services/chatbot.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedChatbotName: string = "Ned Admission FAQs";
  selectedChatbotAvatar: string = "https://bootdey.com/img/Content/avatar/avatar1.png";
  text: string = "";
  loading: boolean = false;
  nedAdmissionDialogues: any = [
    // {
    //   "type": "user",
    //   "question": "How are you?"
    // },
    // {
    //   "type": "chatbot",
    //   "retrievedAnswer": "I am fine"
    // }
  ];

  covidDialogues: any = [
    // {
    //   "type": "user",
    //   "question": "Hey"
    // },
    // {
    //   "type": "chatbot",
    //   "retrievedAnswer": "Hey"
    // }
  ];

  constructor(private chatbotService: ChatbotService) { }

  ngOnInit() {
    this.chatbotService.checkAPIStatus();
  }

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

  send() {
    if (this.text == "" || this.text == null) {
      return;
    }
    this.loading = true;
    if (this.selectedChatbotName == "Ned Admission FAQs") {
      this.nedAdmissionDialogues.push({
        "type": "user",
        "question": this.text
      });

      this.chatbotService.asked_admission_cell({ "question": this.text }).subscribe((data: any) => {
        console.log("reponseAdmissionFAQ: ", data);
        this.nedAdmissionDialogues.push(data);
        this.loading = false;
      });
    } else {
      this.covidDialogues.push(
        {
          "type": "user",
          "question": this.text
        }
      );

      this.chatbotService.asked_covid({ "question": this.text }).subscribe((data: any) => {
        console.log("reponseCovidFAQ: ", data);
        this.covidDialogues.push(data);
        this.loading = false;
      });
    }
    console.log("clicked: ", this.text);
    this.text = "";
  }
}
