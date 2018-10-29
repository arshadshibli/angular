import { Component, OnInit } from '@angular/core';
import { InputService } from 'src/app/service/input.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MovieService } from 'src/app/service/movie.service';
import { DataService } from 'src/app/service/data.service';
import { IMovie } from 'src/app/movie';

@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.css']
})
export class WishListComponent implements OnInit {
  public movies = [];
  public moviesMatching: IMovie[];
  
  constructor(private movieservice:MovieService,private data:DataService) { }

  ngOnInit() {

this.movieservice.getMovies().subscribe(data => this.movies = data);
   
  }

}
