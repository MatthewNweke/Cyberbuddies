import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyListingCardComponent } from './property-listing-card.component';

describe('PropertyListingCardComponent', () => {
  let component: PropertyListingCardComponent;
  let fixture: ComponentFixture<PropertyListingCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PropertyListingCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropertyListingCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
