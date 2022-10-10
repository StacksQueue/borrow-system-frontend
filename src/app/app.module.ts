import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { HeaderComponent } from './components/header/header.component';
import { BorrowComponent } from './components/borrow/borrow.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ItemCardComponent } from './components/borrow/item-card/item-card.component';
import { BorrowedItemCardComponent } from './components/borrow/borrowed-item-card/borrowed-item-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BorrowComponent,
    ProfileComponent,
    ItemCardComponent,
    BorrowedItemCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
