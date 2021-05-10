import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todo-header',
  template: `
    <mat-card>
      <mat-card-title>
        NG Todo
      </mat-card-title>
      
    </mat-card>
  `,
  styles: [`
  mat-card{
    background-color: #E27D5F;
  }
  
  mat-card-title{
    font-size: 26px;
  }
  `
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
