
import { AppComponent } from './app.component';

// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

// CUSTOM MODULES
import { SharedModule } from './shared/shared.module';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { FooterComponent } from './footer/footer.component';
import { PagePreviewComponent } from './page-preview/page-preview.component';
import { HeroComponent } from './hero/hero.component';


@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    FooterComponent,
    PagePreviewComponent,
    HeroComponent
  ],
  imports: [
    // ANGULAR MODULES
    BrowserModule,
    AppRoutingModule,

    // CUSTOM MODULES
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
