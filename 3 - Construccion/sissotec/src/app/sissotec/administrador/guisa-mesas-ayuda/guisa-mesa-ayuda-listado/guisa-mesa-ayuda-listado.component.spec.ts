import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaMesaAyudaListadoComponent } from './guisa-mesa-ayuda-listado.component';

describe('GuisaMesaAyudaListadoComponent', () => {
  let component: GuisaMesaAyudaListadoComponent;
  let fixture: ComponentFixture<GuisaMesaAyudaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaMesaAyudaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaMesaAyudaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
