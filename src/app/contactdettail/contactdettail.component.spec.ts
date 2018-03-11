import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdettailComponent } from './contactdettail.component';

describe('ContactdettailComponent', () => {
  let component: ContactdettailComponent;
  let fixture: ComponentFixture<ContactdettailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactdettailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactdettailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
