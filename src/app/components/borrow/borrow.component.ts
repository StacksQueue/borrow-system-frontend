import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { BorrowService } from 'src/app/services/borrow.service';
import { ClassSchedService } from 'src/app/services/class-sched.service';
import { ClassSchedue } from 'src/app/models/ClassSchedule';
@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss'],
})
export class BorrowComponent implements OnInit {
  selected: any = [];
  equipmentlist = [];
  class_schedule: ClassSchedue = {
    subjectcode: '',
    name: '',
    schedule: '',
    room: '',
    instructor: '',
  };
  constructor(
    private borrowServices: BorrowService,
    private classSchedService: ClassSchedService
  ) {}

  ngOnInit(): void {
    // this.getEquipments();
  }

  getEquipmentList() {
    this.borrowServices.getEquipments().subscribe((resp: any) => {
      if (resp && resp.success) {
        this.equipmentlist = resp.data;
      }
    });
  }

  getClassScheduleList() {}

  requestItems() {
    this.borrowServices.registerRequestedItems({}).subscribe((resp) => {
      console.log(resp);
    });
  }

  onSelectChange(event: MatSelectChange) {
    console.log(event.value);
    this.classSchedService
      .getClassScheduleById('6348f2fed5ee9409f7957263')
      .subscribe((resp: any) => {
        this.class_schedule = resp.data;
      });
  }

  cartClicked() {
    this.borrowServices.cartSubject.next('');
  }
}
