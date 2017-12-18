import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiscTicketsInicioComponent } from './guisc-tickets-inicio.component';

describe('GuiscTicketsInicioComponent', () => {
  let component: GuiscTicketsInicioComponent;
  let fixture: ComponentFixture<GuiscTicketsInicioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiscTicketsInicioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiscTicketsInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
