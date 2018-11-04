import { Component } from "@angular/core";

@Component({
    selector: 'app-success-alert',
    template: `
        <div class="my-alert">
            This is a sucess alert
        </div>
    `,
    styles: [`
        .my-alert {
            height: 50px;
            background-color: lightgreen;
            border: 1px solid green;
            padding: 10px;
            margin: 20px;
            font-weight: bold;
        }
    `]
})
export class SuccessAlert {

}