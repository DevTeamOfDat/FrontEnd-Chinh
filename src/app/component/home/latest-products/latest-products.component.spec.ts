import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestProductsComponent } from './latest-products.component';

describe('LatestProductsComponent', () => {
  let component: LatestProductsComponent;
  let fixture: ComponentFixture<LatestProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LatestProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
