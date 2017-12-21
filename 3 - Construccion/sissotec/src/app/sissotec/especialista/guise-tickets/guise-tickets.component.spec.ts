import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiseTicketsComponent } from './guise-tickets.component';

describe('GuiseTicketsComponent', () => {
  let component: GuiseTicketsComponent;
  let fixture: ComponentFixture<GuiseTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiseTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiseTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
