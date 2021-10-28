import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfotiosComponent } from './portfotios.component';

describe('PortfotiosComponent', () => {
  let component: PortfotiosComponent;
  let fixture: ComponentFixture<PortfotiosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PortfotiosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PortfotiosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
