import { Component, OnInit, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioProjectService } from 'src/app/services/portfolio-projects.service';
import { Project } from 'src/app/models/project.model';
import { NgxSpinnerService } from 'ngx-spinner';
import { timeout } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  sum = 5;
  throttle = 300;
  scrollDistance = 1;

  currentProjects: Project[] = [];
  // Gets projects from tabs
  allProjects: Array<Project>;

  constructor(private activatedRoute: ActivatedRoute,
              private portfolioProjectService: PortfolioProjectService,
              private spinner: NgxSpinnerService)
  {}

  ngOnInit(): void {
    this.loadInitProjects();
  }

  loadInitProjects() {
    this.activatedRoute.params.subscribe(
      // (params) is a function which receives the updated params which we can now handle
      // the (params) function will get executed evertime params changes
      (params) => {
        // used to load our data
        this.allProjects = this.portfolioProjectService.getProjects(params['technology']);
        this.appendItems(0, this.sum);
      }
    );
  }

  addItems(startIndex: number, endIndex: number) {
    if(endIndex >= this.allProjects.length) endIndex = this.allProjects.length;
    if(startIndex >= this.allProjects.length) startIndex = 0;
    this.currentProjects = this.allProjects.slice(0, endIndex);
  }

  appendItems(startIndex: number, endIndex: number) {
    this.addItems(startIndex, endIndex);
  }

  onScrollDown() {
    // add another 5 items
    const start = this.sum;
    this.sum += 5;
    this.appendItems(start, this.sum);
    // this.spinner.show();
    // setTimeout(() => {
    //   this.spinner.hide();
    // }, 250);
  }

}
