import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Observable } from 'rxjs';
import { Post, PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.scss',
})
export class PostListComponent implements OnInit {
  public posts$?: Observable<Post[]>;

  private postService = inject(PostService);

  public ngOnInit(): void {
    this.posts$ = this.postService.getPosts();
  }
}
