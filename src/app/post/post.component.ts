import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  inputPostArr: any = [];
  postForm: FormGroup;

  constructor() {
    this.postForm = new FormGroup({
      'postArea': new FormControl('')
    })
  }

  ngOnInit() {

  }

  uploadPost() {
    let postData = this.postForm.value.postArea;

    /* In real time scenario when data will directly save in db so there will 
    be auto increment in id(primary key) so this logic will not be required  */
    let postIndex = this.inputPostArr.length == 0 ? 1 : this.inputPostArr.length + 1;
    this.inputPostArr.push({ id: postIndex, postDesc: postData, counter: 0 });
    
  }

  vote(index: number, id: number) {
    for (let i = 0; i < this.inputPostArr.length; i++) {
      let obj = this.inputPostArr[i];
      if (obj.id === id) {
        obj.counter = obj.counter + 1;
      }
    }
  }
}
