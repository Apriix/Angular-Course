import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-object-list',
  imports: [CommonModule],
  templateUrl: './object-list.component.html',
  styleUrl: './object-list.component.scss',
})
export class MyObjectListComponent {
  constructor(private router: Router, private route: ActivatedRoute) {
    // this.router.navigate(['/object-list']);
  }

  public myObjects = myObjects;

  public redirectTo(id: number): void {
    this.router.navigate([`${id}`], { relativeTo: this.route });
  }
}

export const myObjects: MyObject[] = [
  {
    title: 'Unu',
    content: 'Lorem ipsum dolor sit amet, consectetur ',
    id: 1,
  },
  {
    title: 'Doi',
    content: 'Lorem ipsum dolor sit amet, consectetur ',
    id: 2,
  },
  {
    title: 'Trei',
    content: 'Lorem ipsum dolor sit amet, consectetur ',
    id: 3,
  },
  {
    title: 'Patru',
    content: 'Lorem ipsum dolor sit amet, consectetur ',
    id: 4,
  },
  {
    title: 'Cinci',
    content: 'Lorem ipsum dolor sit amet, consectetur ',
    id: 5,
  },
];

export interface MyObject {
  title: string;
  content: string;
  id: number;
}
