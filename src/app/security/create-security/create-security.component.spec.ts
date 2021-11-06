import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSecurityComponent } from './create-security.component';

describe('CreateSecurityComponent', () => {
  let component: CreateSecurityComponent;
  let fixture: ComponentFixture<CreateSecurityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSecurityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
