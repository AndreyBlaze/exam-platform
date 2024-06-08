import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestQuestionsBlockComponent } from './demo-test-questions-block.component';

describe('DemoTestQuestionsBlockComponent', () => {
  let component: DemoTestQuestionsBlockComponent;
  let fixture: ComponentFixture<DemoTestQuestionsBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTestQuestionsBlockComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoTestQuestionsBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
