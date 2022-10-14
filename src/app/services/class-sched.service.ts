import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import * as Globals from './../globals';

@Injectable({
  providedIn: 'root',
})
export class ClassSchedService {
  constructor(private https: HttpClient) {}

  getClassScheduleList() {
    return this.https
      .get(`${Globals.SERVER_URL}/api/classschedule`)
      .pipe(catchError(this.handleError));
  }

  getClassScheduleById(classId: string) {
    return this.https
    .get(`${Globals.SERVER_URL}/api/classschedule/getbyid/${classId}`)
    .pipe(catchError(this.handleError));
  }

  handleError(err: HttpErrorResponse) {
    return throwError(() => new Error(err.message));
  }
}
