import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScoringCardComponent } from './scoring-card.component';

describe('ScoringCardComponent', () => {
  let component: ScoringCardComponent;
  let fixture: ComponentFixture<ScoringCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScoringCardComponent]
    });
    fixture = TestBed.createComponent(ScoringCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
