import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio/portfolio.component';
import { ResumeComponent } from './modules/resume/resume/resume.component';
import { AboutComponent } from './modules/about/about/about.component';
import { ListComponent } from './components/list/list.component';
import { TabsComponent } from './components/tabs/tabs.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'portfolio', component: TabsComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full'},
    { path: ':technology', component: ListComponent}
  ] },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled'})],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
