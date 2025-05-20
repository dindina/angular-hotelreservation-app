import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserverationListComponent } from './reserveration-list.component';

describe('ReserverationListComponent', () => {
  let component: ReserverationListComponent;
  let fixture: ComponentFixture<ReserverationListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReserverationListComponent]
    });
    fixture = TestBed.createComponent(ReserverationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
