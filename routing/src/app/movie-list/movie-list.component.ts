import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  public movies = [];
  public movieList=[];
  constructor(private movieservice: MovieService,private router: Router,private route:ActivatedRoute) { }

  ngOnInit() {

    this.movieservice.getMovies()
      .subscribe(data => this.movies = data);
  }
  // saveMovie()
  // {
  //   console.log("post get called");
  //   this.movieservice.postMovie();
  // }
  addNewMovie()
  {
    this.router.navigate(["../addMovie"],{relativeTo:this.route})
  }
  deleteMovie(id:string)
  {
    console.log("deleteMobie  in list");
    this.movieservice.deleteMovie(id);
  }
  updateMovie(id:string,comment:string)
  {
    console.log("updatee Mobie  in list");
    this.movieservice.updateMovie(id,comment);
  }
  getMovie(title:string)
  {
    console.log("get Mobie  in list");
    this.movieservice.getMovieList(title).subscribe(data=>this.movieList=data); 
    console.log(this.movieList);
  }
  searchMovie(title:string)
  {
    console.log("search Mobie  in list");
    this.movieservice.searchMovie(title); 
  }

}
