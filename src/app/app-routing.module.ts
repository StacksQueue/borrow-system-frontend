import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrowComponent } from './components/borrow/borrow.component';
import { ProfileComponent } from './components/profile/profile.component';

const routes: Routes = [
  { 
    path: '',
    component: BorrowComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
