import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent implements OnInit {
  @Output() addItemEvent = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  addItem() {
    this.addItemEvent.emit({
      quantity: 1,
      name: 'solda',
    });
  }
}
