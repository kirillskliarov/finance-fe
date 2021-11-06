import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioStorageComponent } from './portfolio-storage.component';

describe('PortfolioStorageComponent', () => {
  let component: PortfolioStorageComponent;
  let fixture: ComponentFixture<PortfolioStorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfolioStorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfolioStorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
