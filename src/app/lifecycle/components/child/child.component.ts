import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  @Input() title: string = '';

  @Output() eventCHange = new EventEmitter<string>();

  constructor() {
    console.log('%cConstructor', 'color:red');
  }

  public tempTitle: string = '';

  ngOnInit(): void {
    console.log('%cngOnInit', 'color:blue');
    this.tempTitle = this.title;
  }

  public clickHandler() {
    this.tempTitle = ' I am human';
    this.eventCHange.emit(this.tempTitle);
  }
}
