import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface CreatePostPayload {
  userId: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private getPostUrl = 'https://jsonplaceholder.typicode.com/posts';
  private createPostUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) { }

  fetchPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.getPostUrl)
  }

  createPosts(payload: CreatePostPayload): Observable<Post> {
    return this.http.post<Post>(this.createPostUrl, payload)
  }
}
