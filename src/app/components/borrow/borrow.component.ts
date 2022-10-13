import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BorrowService } from 'src/app/services/borrow.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss'],
})
export class BorrowComponent implements OnInit {
  myControl = new FormControl('');
  options: string[] = ['HAHA', 'HEHE', 'huhu'];
  selected: any = [];
  equipmentlist = [];

  constructor(private borrowServices: BorrowService) {}

  ngOnInit(): void {
    this.getEquipments();
  }

  onAddItem(event: Event) {
    console.log('nice', event);
    this.selected.push(event);
  }

  getEquipments() {
    this.borrowServices.getEquipments().subscribe((resp: any) => {
      if (resp && resp.success) {
        this.equipmentlist = resp.data;
      }
    });
  }

  requestItems() {
    this.borrowServices.registerRequestedItems({}).subscribe((resp) => {
      console.log(resp);
    });
  }

  cartClicked() {
    this.borrowServices.cartSubject.next('');
  }
}
