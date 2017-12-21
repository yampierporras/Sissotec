import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaEspecialistaListadoComponent } from './guisa-especialista-listado.component';

describe('GuisaEspecialistaListadoComponent', () => {
  let component: GuisaEspecialistaListadoComponent;
  let fixture: ComponentFixture<GuisaEspecialistaListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaEspecialistaListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaEspecialistaListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
