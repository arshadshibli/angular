import {Component} from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
    selector:'courses',
    template:`<h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">
            {{course}}
        </li>    
    </ul>
    `
})
export class CoursesComponent{
    title="List of Courses";
    courses;
    getTitle()
    {
        return this.title;
    }

}