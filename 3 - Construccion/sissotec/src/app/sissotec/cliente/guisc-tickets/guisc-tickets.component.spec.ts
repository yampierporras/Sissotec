import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuiscTicketsComponent } from './guisc-tickets.component';

describe('GuiscTicketsComponent', () => {
  let component: GuiscTicketsComponent;
  let fixture: ComponentFixture<GuiscTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuiscTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuiscTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
