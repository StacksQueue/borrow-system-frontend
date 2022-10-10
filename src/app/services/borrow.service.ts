import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import * as Globals from '../globals';

@Injectable({
  providedIn: 'root',
})
export class BorrowService {
  constructor(private https: HttpClient) {}

  getEquipments() {
    return this.https
      .get(Globals.SERVER_URL, {})
      .pipe(catchError(this.handleError));
  }

  registerRequestedItems(data: any) {
    const temp = {
      item: '6335a8441d69b6256049e22f',
      quantity: 1,
      borrower: 'ako',
    };
    return this.https
      .post(`${Globals.SERVER_URL}/api/borroweditems`,  temp)
      .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
