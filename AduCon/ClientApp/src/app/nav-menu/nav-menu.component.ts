import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { takeUntil } from 'rxjs/operators';
import { AuthService } from '../login/service/auth.service';
import { JwtDecodeService } from '../login/service/JwtDecoder.service';
import { SharedService } from '../service/shared.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnDestroy{
  
  subject: Subject<void> = new Subject();
  isExpanded = false;
  payload: string; 
  constructor( 
    private jwtDecoder: JwtDecodeService, 
    private authService: AuthService,
    private shared:SharedService
  ){ 
    this.shared.userData 
    .pipe(takeUntil(this.subject))
    .subscribe(res => {
      this.payload = res
      console.log("res", res) 
    })  

    console.log("this.payload", this.payload)
  }

  collapse() {
    this.isExpanded = false;
  }

  logOut(){
    this.authService.logout()
    this.payload =null
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnDestroy(): void {
    this.subject.next();
  }
}
