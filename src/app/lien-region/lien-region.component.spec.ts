import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LienRegionComponent } from './lien-region.component';

describe('LienRegionComponent', () => {
  let component: LienRegionComponent;
  let fixture: ComponentFixture<LienRegionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LienRegionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LienRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
