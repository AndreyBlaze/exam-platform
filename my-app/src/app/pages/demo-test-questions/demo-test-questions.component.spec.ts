import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestQuestionsComponent } from './demo-test-questions.component';

describe('DemoTestQuestionsComponent', () => {
  let component: DemoTestQuestionsComponent;
  let fixture: ComponentFixture<DemoTestQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTestQuestionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoTestQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
