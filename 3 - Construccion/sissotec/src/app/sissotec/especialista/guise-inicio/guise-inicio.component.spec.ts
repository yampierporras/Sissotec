import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiseInicioComponent } from './guise-inicio.component';

describe('GuiseInicioComponent', () => {
  let component: GuiseInicioComponent;
  let fixture: ComponentFixture<GuiseInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiseInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiseInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
