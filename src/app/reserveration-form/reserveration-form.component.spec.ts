import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverationFormComponent } from './reserveration-form.component';

describe('ReserverationFormComponent', () => {
  let component: ReserverationFormComponent;
  let fixture: ComponentFixture<ReserverationFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserverationFormComponent]
    });
    fixture = TestBed.createComponent(ReserverationFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
