import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopicComponent } from './main-topic.component';

describe('MainTopicsComponent', () => {
  let component: MainTopicComponent;
  let fixture: ComponentFixture<MainTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainTopicComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MainTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
