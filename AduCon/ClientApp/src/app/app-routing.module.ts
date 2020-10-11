import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CrudComponent } from './crud/crud.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { TseduComponent } from './tsedu/tesdu.component';
import { AdminGuard } from './login/service/admin.guard.service';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'about', component: AboutComponent },
    { path: 'blogs', component: BlogComponent },      
    { path: 'login', component: LoginComponent },    
    { path: 'tsedu', component: TseduComponent , canActivate: [AdminGuard]},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    entryComponents: [
        CrudComponent
    ], 
})
export class AppRoutingModule { }
