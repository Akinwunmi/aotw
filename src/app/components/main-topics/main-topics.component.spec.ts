import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTopicsComponent } from './main-topics.component';

describe('MainTopicsComponent', () => {
  let component: MainTopicsComponent;
  let fixture: ComponentFixture<MainTopicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MainTopicsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainTopicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
