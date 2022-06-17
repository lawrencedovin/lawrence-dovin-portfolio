import { Project } from "../models/project.model";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {
  private projects = [
    {
      title: 'Qwikwire\'s Landing Page',
      technologies: [
        'AngularJS 1.6',
        'Angular Material',
        'JavaScript',
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
    switch(chosenTechnology) {
      case 'all':
        return this.projects.slice();
      case 'javascript':
        return this.projects.filter((project) => {
          return project.technologies.includes("JavaScript");
        })
      case 'angular':
        return this.projects.filter((project) => {
          return project.technologies.includes("AngularJS 1.6") || project.technologies.includes("AngularJS 13");
        })
      case 'react':
        return this.projects.filter((project) => {
          return project.technologies.includes("React");
        })
      case 'nodejs':
        return this.projects.filter((project) => {
          return project.technologies.includes("Node.js");
        })
      case 'express':
      return this.projects.filter((project) => {
        return project.technologies.includes("Express");
      })
      case 'python':
      return this.projects.filter((project) => {
        return project.technologies.includes("Python");
      })
      case 'flask':
      return this.projects.filter((project) => {
        return project.technologies.includes("Flask");
      })
      case 'sass':
      return this.projects.filter((project) => {
        return project.technologies.includes("Sass SCSS");
      })
      case 'bootstrap':
      return this.projects.filter((project) => {
        return project.technologies.includes("Bootstrap");
      })
      default:
        return this.projects.slice();
    }
  }
}
