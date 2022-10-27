import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabaseContributionComponent } from './database-contribution.component';

describe('DatabaseContributionComponent', () => {
  let component: DatabaseContributionComponent;
  let fixture: ComponentFixture<DatabaseContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabaseContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabaseContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
