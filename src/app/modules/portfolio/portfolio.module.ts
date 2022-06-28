import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { TechnologiesArrayToStringPipe } from 'src/app/pipes/technologies-array-to-string.pipe';
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { NgxSpinnerModule } from 'ngx-spinner';

@NgModule({
  declarations: [
    PortfolioComponent,
    TabsComponent,
    ListComponent,
    ItemComponent,
    // CUSTOM PIPE
    TechnologiesArrayToStringPipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule,
    InfiniteScrollModule,
    NgxSpinnerModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
