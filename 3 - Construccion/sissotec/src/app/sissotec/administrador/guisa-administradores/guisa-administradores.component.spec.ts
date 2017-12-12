import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaAdministradoresComponent } from './guisa-administradores.component';

describe('GuisaAdministradoresComponent', () => {
  let component: GuisaAdministradoresComponent;
  let fixture: ComponentFixture<GuisaAdministradoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaAdministradoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaAdministradoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
