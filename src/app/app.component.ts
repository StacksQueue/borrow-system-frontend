import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'borrow-system';
  opened = true;
  constructor(private activatedRoute: ActivatedRoute) {}
  ngOnInit() {
    console.log('haha');
    this.activatedRoute.queryParams.subscribe((params) =>
      this.queryParamsHandler(params)
    );
  }

  queryParamsHandler(params: Params) {
    console.log(params);
    this.opened = params['opened'] ? params['opened'] : false;
  }

  drawerEvent() {
    console.log('nice')
  }
}
