import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuismTicketsComponent } from './guism-tickets.component';

describe('GuismTicketsComponent', () => {
  let component: GuismTicketsComponent;
  let fixture: ComponentFixture<GuismTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuismTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuismTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
