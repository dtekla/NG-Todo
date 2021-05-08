import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-header',
  template: `
    <h1>
      NG Todo
    </h1>
  `,
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
