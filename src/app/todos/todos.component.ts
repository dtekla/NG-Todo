import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Todo} from "./todo.interface";
import {TodoService} from "./todo.service";
import {map} from "rxjs/operators";


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  inputIsValid: boolean = false;
  todoList: Todo[] = [];
  idForTodo:number;
  isCompleted:boolean = false;


  constructor(private fb: FormBuilder, private todoService: TodoService) { }

  todoForm: FormGroup = this.fb.group({
    newTodo: [null, [
      Validators.required,
      Validators.minLength(6)]
    ],
  })

  get newTodo(): AbstractControl | null {
    return this.todoForm.get('newTodo');
  }


  onClick() {
    console.log(this.todoForm.value.newTodo);

    const createTodo= {
      id: this.idForTodo,
      body: this.todoForm.value.newTodo,
      isCompleted: false
    } as Todo

    this.todoList.push(createTodo);

    this.todoForm.reset();

    this.idForTodo++;

    this.todoService.addTodo(createTodo).subscribe(result => {
      console.log(result);
    })
  }

  validate() {
    if (this.newTodo.value.length >= 6) {
      this.inputIsValid = true
    }
  }

  editTodo() {

  }

  deleteTodo(id: number) {
    console.log(this.todoList);
    this.todoList = this.todoList.filter(todo => todo.id !== id);

    this.todoService.deleteTodo(id).subscribe(result => {
      console.log(result);
    })
  }

  addCompleted(i: number) {
    this.todoList[i].isCompleted = !this.todoList[i].isCompleted;
  }



  ngOnInit(): void {
    this.todoService.getTodos().subscribe(result => {
      this.todoList = result;
    })
  }

}
