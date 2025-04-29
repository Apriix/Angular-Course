import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { MyObject, myObjects } from '../object-list/object-list.component';

@Component({
  selector: 'app-object-item',
  imports: [CommonModule],
  templateUrl: './object-item.component.html',
  styleUrl: './object-item.component.scss',
})
export class MyObjectItemComponent implements OnInit {
  public object?: MyObject;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.object = myObjects[params['id'] - 1];
    });
  }
}
