import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {EditTodoComponent} from "./edit-todo/edit-todo.component";
import {TodosComponent} from "./todos/todos.component";

const routes:Routes = [
  {path: "", component: TodosComponent},
  {path: "edit", component: EditTodoComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
      RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
