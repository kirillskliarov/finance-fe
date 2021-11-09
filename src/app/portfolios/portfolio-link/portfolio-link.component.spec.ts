import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioLinkComponent } from './portfolio-link.component';

describe('PortfolioLinkComponent', () => {
  let component: PortfolioLinkComponent;
  let fixture: ComponentFixture<PortfolioLinkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioLinkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
