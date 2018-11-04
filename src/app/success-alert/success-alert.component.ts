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
            width: '100%';
            height: 40px;
            background-color: green;
            color: white;
            padding: 10px;
        }
    `]
})
export class SuccessAlert {

}