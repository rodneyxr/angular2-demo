/**
 * Created by Rodney Rodriguez on 7/13/2016.
 */
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var Employee = (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Company Employees';
        this.employee = {
            id: 1,
            name: 'Rodney'
        };
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n        <h1>{{title}}</h1>\n        <h2>{{employee.name}}&#39;s details!</h2>\n        <div><label>ID: </label>{{employee.id}}</div>\n        <div><input [(ngModel)]=\"employee.name\" placeholder=\"name\"></div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map