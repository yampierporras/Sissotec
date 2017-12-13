import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaClientesRegistroComponent } from './guisa-clientes-registro.component';

describe('GuisaClientesRegistroComponent', () => {
  let component: GuisaClientesRegistroComponent;
  let fixture: ComponentFixture<GuisaClientesRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaClientesRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaClientesRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
