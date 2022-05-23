
import { AppComponent } from './app.component';

// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// CUSTOM MODULES
import { SharedModule } from './shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { PagePreviewComponent } from './components/page-preview/page-preview.component';
import { HeroComponent } from './components/hero/hero.component';
import { ContactService } from './services/contact.service';


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
    // FormsModule,
    // HttpClientModule,

    // CUSTOM MODULES
    SharedModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
