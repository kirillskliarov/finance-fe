import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioDataComponent } from './portfolio-data.component';

describe('PortfolioDataComponent', () => {
  let component: PortfolioDataComponent;
  let fixture: ComponentFixture<PortfolioDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
