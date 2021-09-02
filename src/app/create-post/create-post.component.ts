import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppService } from '../app-service/app.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent implements OnInit {
  createPostForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  })

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const payload = {...this.createPostForm.value, userId: 1};
    this.appService.createPosts(payload).subscribe(res => {
      alert( 'Create post successfully' + JSON.stringify(res))
    })
  }

}
