import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PrivateLayoutComponent } from './private-layout/private-layout.component';
import { PublicLayoutComponent } from './public-layout/public-layout.component';



@NgModule({
  declarations: [
    PrivateLayoutComponent,
    PublicLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    RouterModule,
    PrivateLayoutComponent,
    PublicLayoutComponent
  ]
})
export class LayoutModule { }
