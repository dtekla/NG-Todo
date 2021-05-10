import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodosComponent } from './todos/todos.component';
import {ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {TodoService} from "./todos/todo.service";
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {TodoModule} from "./todos/todo.module";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    CommonModule,
      MatCardModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
