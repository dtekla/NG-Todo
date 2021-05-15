import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {TodoService} from "./todo.service";
import {TodosComponent} from "./todos.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
      TodosComponent,
  ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatButtonModule,
        RouterModule,
        MatIconModule,
        MatInputModule
    ],
  exports: [TodosComponent],
  providers: [TodoService]
})
export class TodoModule { }
