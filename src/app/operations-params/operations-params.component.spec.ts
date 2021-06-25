import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperationsParamsComponent } from './operations-params.component';

describe('OperationsParamsComponent', () => {
  let component: OperationsParamsComponent;
  let fixture: ComponentFixture<OperationsParamsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OperationsParamsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OperationsParamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
