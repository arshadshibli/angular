import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styleUrls: ['./grand-child.component.css']
})
export class GrandChildComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
  }
sendgtp(message:string)
{
this.data.changeMessage(message);
}
}
