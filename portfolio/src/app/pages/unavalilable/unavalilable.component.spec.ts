import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavalilableComponent } from './unavalilable.component';

describe('UnavalilableComponent', () => {
  let component: UnavalilableComponent;
  let fixture: ComponentFixture<UnavalilableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnavalilableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnavalilableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
