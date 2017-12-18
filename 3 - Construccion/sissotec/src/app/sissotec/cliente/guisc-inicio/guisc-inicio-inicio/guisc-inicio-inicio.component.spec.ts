import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiscInicioInicioComponent } from './guisc-inicio-inicio.component';

describe('GuiscInicioInicioComponent', () => {
  let component: GuiscInicioInicioComponent;
  let fixture: ComponentFixture<GuiscInicioInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiscInicioInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiscInicioInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
