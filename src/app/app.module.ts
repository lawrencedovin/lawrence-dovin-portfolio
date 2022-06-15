
import { AppComponent } from './app.component';

// ANGULAR MODULES
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
// import { FormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';

// CUSTOM MODULES
import { SharedModule } from './shared/shared.module';
import { FooterComponent } from './shared/footer/footer.component';
import { ContactService } from './services/contact.service';
import { HomeModule } from './modules/home/home.module';
import { PortfolioModule } from './modules/portfolio/portfolio.module';
import { ResumeModule } from './modules/resume/resume.module';
import { AboutModule } from './modules/about/about.module';
import { ListComponent } from './components/list/list.component';
import { ItemComponent } from './components/item/item.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ListComponent,
    ItemComponent
  ],
  imports: [
    // ANGULAR MODULES
    BrowserModule,
    AppRoutingModule,
    // FormsModule,
    // HttpClientModule,
    // CUSTOM MODULES
    SharedModule,
    HomeModule,
    PortfolioModule,
    ResumeModule,
    AboutModule
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
