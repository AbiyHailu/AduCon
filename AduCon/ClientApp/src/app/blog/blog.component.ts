import { Component, OnDestroy } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Blog, BlogService, Paragraph } from './service/blog.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
})
export class BlogComponent implements OnDestroy {
  subject: Subject<void> = new Subject();
  title = 'app';
  blogs: Blog[] = []
  blog: Blog
  paragraphs: Paragraph[] = []
  constructor(
    private blogService: BlogService,
  ) {
    this.getBlogs()
  }
  getBlogs() { 
    this.paragraphs=[]
    this.blogService.getBlogs()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.blogs = res
        this.blog = res.reduce((a, b) => (a.dateCreated > b.dateCreated ? a : b));
        this.blog.paragraphs.forEach(e => {
          this.getBlogById(e)
        })
      })
  }
  selectBlog(blog) { 
    this.paragraphs=[]
    this.blog = this.blogs.find(e => e == blog)
    this.blog.paragraphs.forEach(e => {
      this.getBlogById(e)
    })
  }

  getBlogById(e) { 
    this.blogService.getParassById(e)
      .pipe(takeUntil(this.subject))
      .subscribe(par => {
        this.paragraphs.push(par)
      })
  }
  
  ngOnDestroy(): void {
    this.subject.next()
  }
}
