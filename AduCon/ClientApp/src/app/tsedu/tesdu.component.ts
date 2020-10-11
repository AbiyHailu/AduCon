import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Blog, BlogService, Paragraph } from '../blog/service/blog.service';
import { CrudComponent } from '../crud/crud.component';
import { CrudService } from '../crud/service/crud.service';

@Component({
  selector: 'tsedu',
  templateUrl: './tesdu.component.html',
})

export class TseduComponent {
  subject: Subject<void> = new Subject();

  constructor(
    private blogService: BlogService,
    private modalService: NgbModal,
    private crudService: CrudService,
  ) {
    this.getBlogs()
    this.getParagraphs()
    this.mergeBlogsandParas(this.blogs, this.paras)
  }

  blogs: Blog[] = []
  getBlogs() {
    this.blogService.getBlogs()
      .pipe(takeUntil(this.subject))
      .subscribe(res => {
        this.blogs = res
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

  modalRef: any
 addtitle = 'Create a blog'
  createNewItem() {   
    this.modalRef = this.modalService.open(CrudComponent, {
      centered: true,
      size: 'md',
      backdrop: 'static',
      keyboard: false
    }); 
 
    this.modalRef.componentInstance.data = this.crudService.getAddBlogItems();
    this.modalRef.componentInstance.type = this.addtitle;
    this.modalRef.result.then((result: any) => {
      if (result != null) 
        this.blogService.getAddBlog(result)
    })
  }

  editBlog() {

  }
}


