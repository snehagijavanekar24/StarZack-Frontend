import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStreamingComponent } from './game-streaming.component';

describe('GameStreamingComponent', () => {
  let component: GameStreamingComponent;
  let fixture: ComponentFixture<GameStreamingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameStreamingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameStreamingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
