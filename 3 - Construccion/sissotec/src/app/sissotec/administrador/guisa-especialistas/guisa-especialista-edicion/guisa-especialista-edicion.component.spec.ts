import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaEspecialistaEdicionComponent } from './guisa-especialista-edicion.component';

describe('GuisaEspecialistaEdicionComponent', () => {
  let component: GuisaEspecialistaEdicionComponent;
  let fixture: ComponentFixture<GuisaEspecialistaEdicionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaEspecialistaEdicionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaEspecialistaEdicionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
