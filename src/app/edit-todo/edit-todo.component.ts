import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'todo-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {


  constructor(private fb: FormBuilder) { }


  editForm: FormGroup = this.fb.group({
    editedTodo: [null, [
      Validators.required,
      Validators.minLength(6)]
    ],
  })


  onClick() {

  }


  ngOnInit(): void {
  }

}
