import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalllistComponent } from './calllist.component';

describe('CalllistComponent', () => {
  let component: CalllistComponent;
  let fixture: ComponentFixture<CalllistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalllistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
