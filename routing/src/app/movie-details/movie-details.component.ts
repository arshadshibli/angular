import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {

  public movie:IMovie;
  constructor() { }

  ngOnInit() {
  }

}
