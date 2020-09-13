
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class BlogService {
    blog: Blog[] = []
    paragraph: Paragraph[] = []
    constructor(
        private _http: HttpClient,
    ) {
        this.blog.push(
            { id: 1, title: "Constructionm in  ethiopia", paragraphs: [1, 2, 3, 4,], isActive:true, dateCreated:"12/09/2020"},
            { id: 2, title: "What you need to know ", paragraphs: [5, 6, 7], isActive:true, dateCreated:"11/09/2020"},
            { id: 3, title: "wWy Us - Aducon", paragraphs: [8, 9, 10], isActive:true,dateCreated:"10/09/2020" },
            { id: 4, title: "Oops i did it again", paragraphs: [11, 12, 13, 14], isActive:true, dateCreated:"09/09/2020" }

        )
        this.paragraph.push(
            { id: 1, content : "para1 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia" },
            { id: 2, content : "para2 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia" },
            { id: 3, content : "para3 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia" },
            { id: 4, content : "para4 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia" },
            { id: 5, content : "para1 What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know" },
            { id: 6, content : "para2 hat you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know" },
            { id: 7, content : "para3 hat you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know What you need to know" },
            { id: 8, content : "para1 wWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - Aducon  wWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - Aducon" },
            { id: 9, content : "para2 wWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - Aducon  wWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - Aducon" },
            { id: 10, content : "para3 wWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - Aducon  wWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - AduconwWy Us - Aducon" },
            { id: 11, content : "para1 Oops i did it again Oops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it again" },
            { id: 12, content : "para2 Oops i did it again Oops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it again" },
            { id: 13, content : "para3 Oops i did it again Oops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it again" },
            { id: 14, content : "para4 Oops i did it again Oops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it againOops i did it again" },
        )
    }

    getBlogs(): Observable<Blog[]> {
        return of(this.blog)
    }
    getBlogsById(id: number): Observable<Blog> {
        return of(this.blog.find(e => e.id == id))
    }
    getParassById(id: number): Observable<Paragraph> {
        return of(this.paragraph.find(e => e.id == id))
    }
}

export class Blog {
    id: number
    title: string
    paragraphs: number[]
    isActive:boolean
    dateCreated:string
}

export class Paragraph {
    id: number
    content: string
}
