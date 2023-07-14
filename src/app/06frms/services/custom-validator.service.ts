import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

const USER_NAMES = ['lsalas'];

@Injectable({ providedIn: 'root' })
export class CustomValidatorService {
  isUserNameTaken(userName: string): Observable<boolean> {
    const isTaken = USER_NAMES.includes(userName);

    return of(isTaken).pipe(delay(500));
  }
}
