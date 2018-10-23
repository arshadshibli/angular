import { Component, OnInit } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-componenent1',
  templateUrl: './componenent1.component.html',
  styleUrls: ['./componenent1.component.css']
})
export class Componenent1Component {

  name: string="default";

  addName(input:string)
  {
    this.name=input;
    console.log(this.name);
  }
 
}
