import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-borrowed-item-card',
  templateUrl: './borrowed-item-card.component.html',
  styleUrls: ['./borrowed-item-card.component.scss'],
})
export class BorrowedItemCardComponent implements OnInit {
  constructor() {}

  name: string = 'this is test name';

  ngOnInit(): void {}
}
