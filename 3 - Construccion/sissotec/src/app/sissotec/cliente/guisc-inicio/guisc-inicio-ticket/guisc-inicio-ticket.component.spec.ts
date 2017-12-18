import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiscInicioTicketComponent } from './guisc-inicio-ticket.component';

describe('GuiscInicioTicketComponent', () => {
  let component: GuiscInicioTicketComponent;
  let fixture: ComponentFixture<GuiscInicioTicketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiscInicioTicketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiscInicioTicketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
