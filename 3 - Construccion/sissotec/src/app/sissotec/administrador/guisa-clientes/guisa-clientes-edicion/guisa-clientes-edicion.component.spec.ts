import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaClientesEdicionComponent } from './guisa-clientes-edicion.component';

describe('GuisaClientesEdicionComponent', () => {
  let component: GuisaClientesEdicionComponent;
  let fixture: ComponentFixture<GuisaClientesEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaClientesEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaClientesEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
