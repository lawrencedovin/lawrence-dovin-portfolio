import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioProjectService } from 'src/app/services/portfolio-projects.service';
import { Project } from 'src/app/models/project.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  // Gets projects from tabs
  projects: Array<Project>;

  constructor(private activatedRoute: ActivatedRoute, private portfolioProjectService: PortfolioProjectService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      // (params) is a function which receives the updated params which we can now handle
      // the (params) function will get executed evertime params changes
      (params) => {
        // used to load our data
        this.projects = this.portfolioProjectService.getProjects(params['technology']);
      }
    );
  }

}
