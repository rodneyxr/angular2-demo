/**
 * Created by Rodney Rodriguez on 7/13/2016.
 */

import {Component} from '@angular/core';

export class Employee {
    id:number;
    name:string;
}

@Component({
    selector: 'my-app',
    template: `
        <h1>{{title}}</h1>
        <h2>{{employee.name}}&#39;s details!</h2>
        <div><label>ID: </label>{{employee.id}}</div>
        <div><input [(ngModel)]="employee.name" placeholder="name"></div>
    `
})

export class AppComponent {
    title = 'Company Employees';
    employee:Employee = {
        id: 1,
        name: 'Rodney'
    };
}