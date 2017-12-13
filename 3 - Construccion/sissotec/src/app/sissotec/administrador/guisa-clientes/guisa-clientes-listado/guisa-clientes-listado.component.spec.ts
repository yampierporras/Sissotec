import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaClientesListadoComponent } from './guisa-clientes-listado.component';

describe('GuisaClientesListadoComponent', () => {
  let component: GuisaClientesListadoComponent;
  let fixture: ComponentFixture<GuisaClientesListadoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaClientesListadoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaClientesListadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
