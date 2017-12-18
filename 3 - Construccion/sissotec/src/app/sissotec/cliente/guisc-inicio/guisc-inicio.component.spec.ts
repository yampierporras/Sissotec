import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiscInicioComponent } from './guisc-inicio.component';

describe('GuiscInicioComponent', () => {
  let component: GuiscInicioComponent;
  let fixture: ComponentFixture<GuiscInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiscInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiscInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
