import { Component, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  name: string;
  @Output() public childEvent=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  addName(nam:string)
  {
    this.name=nam;
    this.childEvent.emit(this.name);
  }

}
