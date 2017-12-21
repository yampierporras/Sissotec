import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaEspecialistaRegistroComponent } from './guisa-especialista-registro.component';

describe('GuisaEspecialistaRegistroComponent', () => {
  let component: GuisaEspecialistaRegistroComponent;
  let fixture: ComponentFixture<GuisaEspecialistaRegistroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaEspecialistaRegistroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaEspecialistaRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
