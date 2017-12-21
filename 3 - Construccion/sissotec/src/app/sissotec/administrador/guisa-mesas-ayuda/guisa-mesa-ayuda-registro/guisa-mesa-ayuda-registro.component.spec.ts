import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaMesaAyudaRegistroComponent } from './guisa-mesa-ayuda-registro.component';

describe('GuisaMesaAyudaRegistroComponent', () => {
  let component: GuisaMesaAyudaRegistroComponent;
  let fixture: ComponentFixture<GuisaMesaAyudaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaMesaAyudaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaMesaAyudaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
