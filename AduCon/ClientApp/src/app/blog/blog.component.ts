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
    this.blogService.getBlogs()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.blogs = res 
        this.getParagraphs()
      })
  }
  
  paras: Paragraph[] = []
  getParagraphs() {
    this.blogService.getParas()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.paras = res
      })
  }

  mergedBlogs = []
  mergeBlogsandParas(blogs, paras) {
    this.mergedBlogs = []
    if (blogs && blogs.length > 0) {
      blogs.forEach(element => {
        if (paras && paras.length > 0) {
          let paragraphs = []
          paras.forEach(e => {
            if (element.id == e.blogId) {
              paragraphs.push(e)
              element = Object.assign({}, paragraphs, element)
            }
          });
          console.log(" this.mergedBlogs", this.mergedBlogs)
          this.mergedBlogs.push(element)
        }
      });
    }
  }
  
  selectBlog(blog) { 
    this.paragraphs=[]
    this.blog = this.blogs.find(e => e == blog)
   /*  this.blog.paragraphs.forEach(e => {
      this.getBlogById(e)
    }) */
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
