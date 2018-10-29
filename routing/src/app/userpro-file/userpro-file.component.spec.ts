import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserproFileComponent } from './userpro-file.component';

describe('UserproFileComponent', () => {
  let component: UserproFileComponent;
  let fixture: ComponentFixture<UserproFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserproFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserproFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
