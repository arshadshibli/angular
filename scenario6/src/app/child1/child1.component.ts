import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    
  }
  sendMessage(message:string)
  {
    this.data.changeMessage(message);
  }

}
