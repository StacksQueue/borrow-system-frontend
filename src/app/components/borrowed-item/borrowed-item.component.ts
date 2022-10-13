import { Component, OnInit } from '@angular/core';
import { BorrowService } from 'src/app/services/borrow.service';

@Component({
  selector: 'app-borrowed-item',
  templateUrl: './borrowed-item.component.html',
  styleUrls: ['./borrowed-item.component.scss'],
})
export class BorrowedItemComponent implements OnInit {
  borrowedItemList: any[] = [];
  constructor(private borrowService: BorrowService) {}

  ngOnInit(): void {
    this.borrowService.onAddEquipment().subscribe((resp: any) => {
      this.borrowedItemList.push(resp);
    });
  }
}
