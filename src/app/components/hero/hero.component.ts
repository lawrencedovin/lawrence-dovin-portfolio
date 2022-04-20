import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, AfterViewInit{

  constructor() { }
  // hero = document.getElementById("heroID");
  @ViewChild("heroID") heroID: HTMLElement;
  @ViewChild("myNameElem") myNameElem: ElementRef;

  idk = document.getElementById('#heroID');

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    if(this.idk) {
      console.log(this.idk);
    }
    console.log(this.heroID);
    console.log(this.myNameElem);
  }

}
