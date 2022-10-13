import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BorrowService } from 'src/app/services/borrow.service';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter();
  @Input() equipment: any;

  constructor(private borrowService: BorrowService) {}

  ngOnInit(): void {
    console.log(this.equipment);
  }

  addEquipment() {
    this.borrowService.equipmentSubject.next(this.equipment);
  }
}
