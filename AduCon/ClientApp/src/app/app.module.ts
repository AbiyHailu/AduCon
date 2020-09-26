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

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    TseduComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule,
    RouterModule.forRoot([
       { path: '', component: HomeComponent, pathMatch: 'full' },
       { path: 'about', component: AboutComponent },
       { path: 'blogs', component: BlogComponent },      
       { path: 'login', component: LoginComponent },    
       { path: 'tsedu', component: TseduComponent , canActivate: [AdminGuard]},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
