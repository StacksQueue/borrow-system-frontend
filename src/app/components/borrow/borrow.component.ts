import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BorrowService } from 'src/app/services/borrow.service';

@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss'],
})
export class BorrowComponent implements OnInit {
  @Output() drawerEvent = new EventEmitter();

  myControl = new FormControl('');
  options: string[] = ['HAHA', 'HEHE', 'huhu'];
  selected: any = [];

  constructor(private borrowServices: BorrowService) {}

  ngOnInit(): void {}

  onAddItem(event: Event) {
    console.log('nice', event);
    this.selected.push(event);
  }

  requestItems() {
    this.borrowServices.registerRequestedItems({}).subscribe((resp) => {
      console.log(resp);
    });
  }

  drawer() {
    console.log('hu')
    this.drawerEvent.emit('');
  }
}
