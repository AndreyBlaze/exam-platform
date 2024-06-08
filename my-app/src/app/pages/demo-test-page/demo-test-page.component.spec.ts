import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoTestPageComponent } from './demo-test-page.component';

describe('DemoTestPageComponent', () => {
  let component: DemoTestPageComponent;
  let fixture: ComponentFixture<DemoTestPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemoTestPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DemoTestPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
