import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private httpClient = inject(HttpClient);
  public getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(
      'https://jsonplaceholder.typicode.com/posts'
    );
  }
}
