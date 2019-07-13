import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactMeComponent } from './contact-me.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [ContactMeComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [ContactMeComponent]
})
export class ContactMeModule { }
