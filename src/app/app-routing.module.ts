import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home/home.component';
import { PortfolioComponent } from './modules/portfolio/portfolio/portfolio.component';
import { ResumeComponent } from './modules/resume/resume/resume.component';
import { AboutComponent } from './modules/about/about/about.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  // { path: 'portfolio', component: PortfolioComponent },
  { path: 'portfolio', component: PortfolioComponent, children: [
    { path: '', redirectTo: 'all', pathMatch: 'full'},
    { path: ':technology', component: PortfolioComponent}
  ] },
  { path: 'resume', component: ResumeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
