import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestQuestionComponent } from './demo-test-question.component';

describe('DemoTestQuestionComponent', () => {
  let component: DemoTestQuestionComponent;
  let fixture: ComponentFixture<DemoTestQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTestQuestionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoTestQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
