import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CrudService {

  constructor(
  ) { }

  getAddAboutItems() {
    return [
      { Binding: 'title', Type: 'text', Label: "Enter Title" }, 
      { Binding: 'isActive', Type: 'checkBox', Label: "Enter Plan Name" } 
    ]
  }

  getAddParagraphtems() {
    return [
      { Binding: 'content', Type: 'textArea', Label: "Enter Company Name" }, 
    ]
  }

  getAddBlogItems() {
    return [
      { Binding: 'title', Label: "Enter Title", Type: 'text' }, 
      { Binding: 'isActive', Label: "Is Active", Type: 'checkBox' }
    ]
  } 
}

