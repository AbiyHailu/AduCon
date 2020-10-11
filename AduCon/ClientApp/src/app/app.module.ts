import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router'; 
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { TseduComponent } from './tsedu/tesdu.component';
import { AdminGuard } from './login/service/admin.guard.service';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import {  NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({  
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    TseduComponent,
    LoginComponent, 
    CrudComponent
  ],
  imports: [
    CommonModule,
    BrowserModule ,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule, 
    AppRoutingModule ,
    NgbModule,
  ], 
   entryComponents:[
    CrudComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
