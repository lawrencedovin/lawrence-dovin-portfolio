import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { RouterModule } from '@angular/router';
import { TabsComponent } from 'src/app/components/tabs/tabs.component';

@NgModule({
  declarations: [
    PortfolioComponent,
    TabsComponent
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
