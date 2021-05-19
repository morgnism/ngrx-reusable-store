import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionButtonBarComponent } from './action-button-bar.component';

describe('ActionButtonBarComponent', () => {
  let component: ActionButtonBarComponent;
  let fixture: ComponentFixture<ActionButtonBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionButtonBarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionButtonBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
