import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorrowedItemCardComponent } from './borrowed-item-card.component';

describe('BorrowedItemCardComponent', () => {
  let component: BorrowedItemCardComponent;
  let fixture: ComponentFixture<BorrowedItemCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorrowedItemCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BorrowedItemCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
