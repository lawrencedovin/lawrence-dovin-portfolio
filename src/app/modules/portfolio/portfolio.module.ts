import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';
import { ListComponent } from 'src/app/components/list/list.component';
import { ItemComponent } from 'src/app/components/item/item.component';
import { TechnologiesArrayToStringPipe } from 'src/app/pipes/technologies-array-to-string.pipe';

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
    AppRoutingModule,
    RouterModule
  ],
  exports: [
    PortfolioComponent
  ]
})
export class PortfolioModule { }
