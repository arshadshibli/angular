import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Componenent1Component } from './componenent1.component';

describe('Componenent1Component', () => {
  let component: Componenent1Component;
  let fixture: ComponentFixture<Componenent1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Componenent1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Componenent1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
