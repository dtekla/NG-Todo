import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {CommonModule} from "@angular/common";
import {TodoModule} from "./todos/todo.module";
import { EditTodoComponent } from './edit-todo/edit-todo.component';
import {AppRoutingModule} from "./app-routing.module";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EditTodoComponent
  ],
  imports: [
    BrowserModule,
    TodoModule,
    CommonModule,
    MatCardModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
