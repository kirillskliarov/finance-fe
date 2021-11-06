import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSplitComponent } from './create-split.component';

describe('CreateSplitComponent', () => {
  let component: CreateSplitComponent;
  let fixture: ComponentFixture<CreateSplitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSplitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSplitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
