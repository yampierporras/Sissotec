import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuisaMesasAyudaComponent } from './guisa-mesas-ayuda.component';

describe('GuisaMesasAyudaComponent', () => {
  let component: GuisaMesasAyudaComponent;
  let fixture: ComponentFixture<GuisaMesasAyudaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuisaMesasAyudaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuisaMesasAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
