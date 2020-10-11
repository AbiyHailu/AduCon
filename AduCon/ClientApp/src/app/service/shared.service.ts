import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedService { 

  private userDataSource = new BehaviorSubject<any>(null);
  userData = this.userDataSource.asObservable();
  changePayload(user: any) { 
    this.userDataSource.next(user)
  } 
}
