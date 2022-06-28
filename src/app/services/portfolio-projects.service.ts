import { HttpClient } from "@angular/common/http";
import { Project } from "../models/project.model";
import { Injectable } from "@angular/core";
import projects from "../../assets/data.json";

@Injectable({
  providedIn: 'root'
})
export class PortfolioProjectService {

  private projects: Array<Project> = projects;

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
          return project.technologies.includes("AngularJS 1.6") || project.technologies.includes("Angular 14") || project.technologies.includes("AngularJS 1.X");
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
