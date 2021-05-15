import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'todo-header',
    template: `
        <mat-toolbar>
            <mat-icon>star_border</mat-icon>
            <span>Ng Todo</span>
            <span class="spacer"></span>
            <button mat-icon-button>
                <mat-icon>favorite</mat-icon>
            </button>
            <button mat-icon-button>
                <mat-icon>share</mat-icon>
            </button>
        </mat-toolbar>
    `,
    styles: [`
        mat-card {
            background-color: #E27D5F;
        }

        .spacer {
            flex: 1 1 auto;
        }
    `]
})
export class HeaderComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

}
