import { Project } from "../models/project.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {
  private projects = [
    {
      title: 'Qwikwire\'s Landing Page',
      // technologies: 'AngularJS 1.6 | Angular Material | HTML | CSS',
      technologies: [
        'AngularJS 1.6',
        'Angular Material',
        'HTML',
        'CSS'
      ],
      description: 'Qwikwire’s revamped landing page which was designed and organized to allow the visitor to understand Qwikwire’s business model efficiently in a single page website.',
      image: 'qwikwire-landing-page.gif',
      projectAvailable: true,
      codeAvailable: false
    }
  ]

  getProjects(chosenTechnology: string) {
    if(chosenTechnology === 'all') {
      return this.projects.slice();
    }
    return this.projects.slice();
    // if(chosenTechnology === 'angular') {
    //   return this.projects.filter((project) => {

    //   })
    // }
  }
}
