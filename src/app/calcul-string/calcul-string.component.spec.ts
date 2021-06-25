import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculStringComponent } from './calcul-string.component';

describe('CalculStringComponent', () => {
  let component: CalculStringComponent;
  let fixture: ComponentFixture<CalculStringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalculStringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculStringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
