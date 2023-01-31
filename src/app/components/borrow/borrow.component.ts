import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelectChange } from '@angular/material/select';
import { BorrowService } from 'src/app/services/borrow.service';
import { ClassSchedService } from 'src/app/services/class-sched.service';
import { ClassSchedue } from 'src/app/models/ClassSchedule';
import { Pagination } from 'src/app/models/Pagination';
import { from } from 'rxjs';
import {
  ActivatedRoute,
  NavigationExtras,
  Params,
  Router,
} from '@angular/router';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-borrow',
  templateUrl: './borrow.component.html',
  styleUrls: ['./borrow.component.scss'],
})
export class BorrowComponent implements OnInit {
  selected: any = [];
  equipmentlist = [];
  class_schedlist: [ClassSchedue];
  selected_sched = '';
  class_schedule: ClassSchedue;
  isSchedSelected: Boolean = false;
  pagination: Pagination = {
    length: 100,
    page: 1,
    limit: 10,
    pageSizeOption: [5, 10, 25, 100],
  };
  // class_schedule: ClassSchedue = {
  //   subjectcode: '',
  //   name: '',
  //   schedule: '',
  //   room: '',
  //   instructor: {
  //     _id: '',
  //     name: '',
  //   },
  //   students: [
  //     {
  //       _id: '',
  //       name: '',
  //     },
  //   ],
  // };
  constructor(
    private borrowServices: BorrowService,
    private classSchedService: ClassSchedService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getClassScheduleList();
    this.getEquipmentList();

    this.activatedRoute.queryParams.subscribe((params: Params) =>
      this.queryParamsHandling(params)
    );
  }

  getEquipmentList() {
    this.borrowServices.getEquipments().subscribe((resp: any) => {
      if (resp && resp.success) {
        this.equipmentlist = resp.data;
        console.log(resp);
      }
    });
  }

  getClassScheduleList() {
    this.classSchedService.getClassScheduleList().subscribe((resp: any) => {
      if (resp && resp.success) {
        this.class_schedlist = resp.data;
        console.log(this.class_schedlist);
      }
    });
  }

  requestItems() {
    this.borrowServices.registerRequestedItems({}).subscribe((resp) => {
      console.log(resp);
    });
  }

  onSelectChange(event: MatSelectChange) {
    console.log(event.value);
    this.selected_sched = event.value;
    this.classSchedService
      .getClassScheduleById(this.selected_sched)
      .subscribe((resp: any) => {
        this.class_schedule = resp.data;
        setTimeout(() => {
          this.isSchedSelected = true;
        }, 100);
      });
  }

  cartClicked() {
    this.borrowServices.cartSubject.next('');
  }

  paginate(event: PageEvent) {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        page: event.pageIndex,
        limit: event.pageSize,
        total: event.length,
      },
      queryParamsHandling: 'merge',
    };

    this.router.navigate(['/'], navigationExtras);
  }

  queryParamsHandling(params: Params) {
    this.pagination.length = params['total'] ? params['total'] : 0;
    this.pagination.page = params['page'] ? params['page'] : 1;
    this.pagination.limit = params['limit'] ? params['limit'] : 1;
  }
}
