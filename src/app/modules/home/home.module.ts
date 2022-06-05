import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from 'src/app/components/hero/hero.component';
import { PagePreviewComponent } from 'src/app/components/page-preview/page-preview.component';
import { ContactFormComponent } from 'src/app/components/contact-form/contact-form.component';

@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    PagePreviewComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
