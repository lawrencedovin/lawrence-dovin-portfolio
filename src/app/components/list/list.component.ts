import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PortfolioProjectService } from 'src/app/services/portfolio-projects.service';
import { Project } from 'src/app/models/project.model';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  notEmptyPost = true;
  notscrolly = true;

  // Gets projects from tabs
  projects: Array<Project>;

  constructor(private activatedRoute: ActivatedRoute,
              private portfolioProjectService: PortfolioProjectService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadInitPost();
  }

  loadInitPost() {
    this.activatedRoute.params.subscribe(
      // (params) is a function which receives the updated params which we can now handle
      // the (params) function will get executed evertime params changes
      (params) => {
        // used to load our data
        this.projects = this.portfolioProjectService.getProjects(params['technology']);
      }
    );
  }

  // loadNextPost() {
  //   const url = 'http://tlino.96.lt/api/getnextpost';
  //   // return last post from the array
  //   const lastPost = this.allpost[this.allpost.length - 1];
  //   // get id of last post
  //   const lastPostId = lastPost.id;
  //   // sent this id as key value pare using formdata()
  //   const dataToSend = new FormData();
  //   dataToSend.append('id', lastPostId);
  //   // call http request
  //   this.http.post(url, dataToSend)
  //   .subscribe( (data: any) => {
  //      const newPost = data[0];
  //      this.spinner.hide();
  //      if (newPost.length === 0 ) {
  //        this.notEmptyPost =  false;
  //      }
  //      // add newly fetched posts to the existing post
  //      this.allpost = this.allpost.concat(newPost);
  //      this.notscrolly = true;
  //    });
  // }

  // onScroll() {
  //   if (this.notscrolly && this.notEmptyPost) {
  //     this.spinner.show();
  //     this.notscrolly = false;
  //     this.loadNextPost();
  //    }
  // }

}
