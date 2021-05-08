import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `
    <todo-header></todo-header>
    <app-todos></app-todos>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-todo';
}
