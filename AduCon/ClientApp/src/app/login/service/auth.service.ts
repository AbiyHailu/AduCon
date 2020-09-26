import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';  

@Injectable({ providedIn: 'root' })
export class AuthService { 
  userData = new BehaviorSubject<User>(new User());
  constructor(
    private http: HttpClient, 
    private router: Router) { 

    }
 
  login(userDetails) {
    console.log(userDetails)
    return this.http.post<any>('/api/login', userDetails)
      .pipe(map(response => {
        localStorage.setItem('authToken', response.token);
        this.setUserDetails();

        console.log("response", response)
        return response;
      }));
  }

  setUserDetails() {
    if (localStorage.getItem('authToken')) {
      const userDetails = new User();
      const decodeUserDetails = JSON.parse(window.atob(localStorage.getItem('authToken').split('.')[1]));
      userDetails.name = decodeUserDetails.sub; 
      userDetails.isLoggedIn = true; 
      this.userData.next(userDetails);
    }
  }

  logout() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
    this.userData.next(new User());
  } 
}
export class User{
    id:string;
    name:string
    isLoggedIn:boolean 
}
