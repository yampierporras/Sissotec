import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaClientesComponent } from './guisa-clientes.component';

describe('GuisaClientesComponent', () => {
  let component: GuisaClientesComponent;
  let fixture: ComponentFixture<GuisaClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
