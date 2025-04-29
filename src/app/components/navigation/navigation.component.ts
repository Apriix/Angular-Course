import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'my-navigation',
  imports: [RouterLink],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class MyNavigation {}
