import { Component } from '@angular/core';

@Component({
  selector: 'tsedu',
  templateUrl: './tesdu.component.html',
})

export class TseduComponent {
 
    constructor() { 
        this.getBlogs()
        this.getParagraphs() 
    }
    getParagraphs() {
        throw new Error('Method not implemented.');
    }
    getBlogs() {
        throw new Error('Method not implemented.');
    }

    addBlog(){


    }
    editBlog(){

    }
}


