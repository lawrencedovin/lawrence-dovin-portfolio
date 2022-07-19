import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioButtonComponent } from './portfolio-button.component';

describe('PortfolioButtonComponent', () => {
  let component: PortfolioButtonComponent;
  let fixture: ComponentFixture<PortfolioButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
