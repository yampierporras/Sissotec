import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuismInicioComponent } from './guism-inicio.component';

describe('GuismInicioComponent', () => {
  let component: GuismInicioComponent;
  let fixture: ComponentFixture<GuismInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuismInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuismInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
