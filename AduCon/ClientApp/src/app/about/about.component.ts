import { Component, OnDestroy } from '@angular/core'; 
import { takeUntil } from 'rxjs/operators';
import { AboutService, About } from './service/about.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnDestroy {
    subject: Subject<void> = new Subject();
    title = 'app';
    aboutDetail: About[]=[]
    constructor(
        private aboutService: AboutService, 
      ) {
        this.getAbout() 
      }
    getAbout() {
        this.aboutService.getAbout()
          .pipe(takeUntil(this.subject))
          .subscribe(res => {
            this.aboutDetail = res
          })
      }
      ngOnDestroy(): void {
        this.subject.next()
      }
}
