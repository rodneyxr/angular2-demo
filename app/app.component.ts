/**
 * Created by Rodney Rodriguez on 7/13/2016.
 */

import {Component} from "@angular/core";

export class Employee {
    id:number;
    name:string;
}

const EMPLOYEES:Employee[] = [
    {id: 10, name: 'Tim Duncan'},
    {id: 11, name: 'Tony Parker'},
    {id: 12, name: 'Manu Ginobili'},
    {id: 13, name: 'LaMarcus Aldridge'},
    {id: 14, name: 'Danny Green'},
    {id: 15, name: 'Jonathan Simmons'},
    {id: 16, name: 'Kyle Anderson'},
    {id: 17, name: 'Kevin Martin'},
    {id: 18, name: 'Ryan Arcidiacono'},
    {id: 19, name: 'Pau Gasol'},
    {id: 20, name: 'Dejounte Murray'},
];

@Component({
    selector: 'my-app',
    moduleId: module.id,
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
})

export class AppComponent {
    title = 'Company Employees';
    employees = EMPLOYEES;
    selectedEmployee:Employee;

    onSelect(employee:Employee) {
        this.selectedEmployee = employee;
    }
}

