import { Component, OnInit } from '@angular/core';
import { AppService, Post } from '../app-service/app.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];
  fetchingPosts: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
  }

  getPosts() {
    this.fetchingPosts = true;
    this.appService.fetchPosts().subscribe(res => {
      this.fetchingPosts = false;
      console.log(res);
      this.posts = res
    })
  }

}
