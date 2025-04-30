import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PostItemComponent } from './post-item/post-item.component';
import { PostListComponent } from './post-list/post-list.component';
import { RequestRoutingModule } from './request-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    PostItemComponent,
    PostListComponent,
    RequestRoutingModule,
  ],
})
export class RequestModule {}
