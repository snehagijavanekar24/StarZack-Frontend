import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameStreamingDetailsComponent } from './game-streaming-details.component';

describe('GameStreamingDetailsComponent', () => {
  let component: GameStreamingDetailsComponent;
  let fixture: ComponentFixture<GameStreamingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameStreamingDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameStreamingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
