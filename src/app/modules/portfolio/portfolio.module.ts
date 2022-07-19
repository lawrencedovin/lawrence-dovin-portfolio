import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { PortfolioButtonComponent } from 'src/app/components/portfolio-button/portfolio-button.component';
import { TechnologiesArrayToStringPipe } from 'src/app/pipes/technologies-array-to-string.pipe';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    PortfolioComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    PortfolioButtonComponent,
    // CUSTOM PIPE
    TechnologiesArrayToStringPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
