import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaEspecialistasComponent } from './guisa-especialistas.component';

describe('GuisaEspecialistasComponent', () => {
  let component: GuisaEspecialistasComponent;
  let fixture: ComponentFixture<GuisaEspecialistasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaEspecialistasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaEspecialistasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
