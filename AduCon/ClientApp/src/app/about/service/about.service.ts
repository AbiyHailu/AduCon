

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AboutService {
    blog: About[] = [] 
    constructor(
        private _http: HttpClient,
    ) {
        this.blog.push(
            { id: "1", title: "Constructionm in  ethiopia", paragraphs:"para1 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia", isActive:true},
            { id: "1", title: "What you need to know ", paragraphs: "para1 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia", isActive:true },
            { id: "1", title: "wWy Us - Aducon", paragraphs: "para1 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia" , isActive:true},
            { id: "1", title: "Oops i did it again", paragraphs: "para1 Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopiapara Constructionm in  ethiopia" , isActive:true}
        ) 
    }

    getAbout(): Observable<About[]> {
        return of(this.blog)
    } 
}

export class About {
    id: string
    title: string
    paragraphs: string
    isActive:boolean
}
 