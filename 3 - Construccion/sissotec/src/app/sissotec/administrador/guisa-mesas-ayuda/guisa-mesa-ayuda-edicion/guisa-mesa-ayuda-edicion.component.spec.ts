import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaMesaAyudaEdicionComponent } from './guisa-mesa-ayuda-edicion.component';

describe('GuisaMesaAyudaEdicionComponent', () => {
  let component: GuisaMesaAyudaEdicionComponent;
  let fixture: ComponentFixture<GuisaMesaAyudaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaMesaAyudaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaMesaAyudaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
