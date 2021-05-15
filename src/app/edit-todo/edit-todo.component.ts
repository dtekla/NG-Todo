import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";
import {TodoService} from "../todos/todo.service";
import {Todo} from "../todos/todo.interface";

@Component({
    selector: 'todo-edit-todo',
    templateUrl: './edit-todo.component.html',
    styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {


    id: number;
    todo: Todo | undefined;
    errorMessage: string = "";

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private todoService: TodoService) {
    }


    editForm: FormGroup = this.fb.group({
        editedTodo: [null, [
            Validators.required,
            Validators.minLength(6)]
        ],
    })


    onClick() {
        const newTodo: Todo = {
            body: this.newName.value,
            id: this.id,
            isCompleted: this.todo.isCompleted
        }
        console.log(newTodo);
        this.todoService.updateTodo(newTodo).subscribe(response => {
            console.log(response);
        })
    }

    get newName(): AbstractControl | null {
        return this.editForm.get('editedTodo');
    }


    ngOnInit(): void {
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.todoService.getTodoById(this.id).subscribe(
                response => {
                    this.todo = response
                },
                error => {
                    this.errorMessage = error;
                }
            );
        });
    }
}
