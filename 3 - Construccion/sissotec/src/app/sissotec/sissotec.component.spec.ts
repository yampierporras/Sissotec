import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SissotecComponent } from './sissotec.component';

describe('SissotecComponent', () => {
  let component: SissotecComponent;
  let fixture: ComponentFixture<SissotecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SissotecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SissotecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
