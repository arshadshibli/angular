import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  @Input('parentData') public name;
  @Output()  public childEvent=new EventEmitter();
  message:string;
  constructor(private data:DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message=>this.message=message);
  }
  fireEmit(mes:string)
  {
    this.childEvent.emit(mes);
  }
  sendsts()
  {
    this.data.changeMessage("meessage from child1");
  }

}
