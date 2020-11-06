import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaincontentAreaComponent } from './maincontent-area.component';

describe('MaincontentAreaComponent', () => {
  let component: MaincontentAreaComponent;
  let fixture: ComponentFixture<MaincontentAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaincontentAreaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaincontentAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
