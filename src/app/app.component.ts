import { Component } from '@angular/core';
// import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lawrence-dovin-portfolio';

  // constructor(private viewportScroller: ViewportScroller) {}

  // public onClick(elementID: string): void {
  //   this.viewportScroller.scrollToAnchor(elementID);
  // }

  // public scroll(elementID: string) {
  //   let el = document.querySelectorAll(elementID)[0];
  //   el.scrollIntoView({behavior: 'smooth'});
  //   console.log('hwadsd')
  // }

  // scroll() {
  //   let el = document.querySelectorAll("#contact-form")[0];
  //   el.scrollIntoView({behavior: 'smooth'});
  // }
}
