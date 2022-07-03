import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogueListComponent } from './dialogue-list/dialogue-list.component';
import { DialogueFormComponent } from './dialogue-form/dialogue-form.component';



@NgModule({
  declarations: [
    DialogueListComponent,
    DialogueFormComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DialogueModule { }
