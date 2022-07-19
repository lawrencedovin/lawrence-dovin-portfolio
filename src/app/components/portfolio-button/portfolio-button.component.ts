import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio-button',
  templateUrl: './portfolio-button.component.html',
  styleUrls: ['./portfolio-button.component.scss']
})
export class PortfolioButtonComponent implements OnInit {

  @Input() URL: string;
  @Input() btnName: string;

  constructor() { }

  ngOnInit(): void {
  }

}
