import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutMeComponent } from './about-me.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [AboutMeComponent],
  imports: [CommonModule, AppRoutingModule],
  exports: [AboutMeComponent]
})
export class AboutMeModule { }
