import { Component } from '@angular/core';

@Component({
  selector: 'todo-root',
  template: `
    <todo-header></todo-header>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-todo';
}
