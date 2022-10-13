import { Component } from '@angular/core';
import {
  ActivatedRoute,
  NavigationExtras,
  Params,
  Router,
} from '@angular/router';
import { BorrowService } from './services/borrow.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'borrow-system';
  opened = true;
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private borrowService: BorrowService
  ) {}
  ngOnInit() {
    // console.log('haha');
    this.activatedRoute.queryParams.subscribe((params) =>
      this.queryParamsHandler(params)
    );
    this.borrowService.onCartClick().subscribe((resp) => {
      this.navigate();
    });
  }

  navigate() {
    this.opened = !this.opened;
    const navigationExtras: NavigationExtras = {
      queryParams: {
        opened: this.opened,
      },
    };
    this.router.navigate(['/'], navigationExtras);
  }

  queryParamsHandler(params: Params) {
    this.opened = params['opened'] == "true" ? params['opened'] : false;
  }
}
