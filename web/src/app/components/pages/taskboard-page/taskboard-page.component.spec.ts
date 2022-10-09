import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardPageComponent } from './taskboard-page.component';

describe('TaskboardPageComponent', () => {
  let component: TaskboardPageComponent;
  let fixture: ComponentFixture<TaskboardPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskboardPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskboardPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
