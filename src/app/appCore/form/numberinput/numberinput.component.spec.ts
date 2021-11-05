import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberinputComponent } from './numberinput.component';

describe('NumberinputComponent', () => {
  let component: NumberinputComponent;
  let fixture: ComponentFixture<NumberinputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberinputComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
