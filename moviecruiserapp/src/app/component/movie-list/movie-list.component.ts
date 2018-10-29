import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import { IMovieIn } from 'src/app/moviein';
import { InputService } from 'src/app/service/input.service';
import { MovieService } from 'src/app/service/movie.service';
import { DataService } from 'src/app/service/data.service';
import { IMovie } from 'src/app/movie';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  public name="arshad";
  private url = "https://localhost:8443/api/v1";
  movie:IMovie={
    "imdbId":"defay",
    "movieTitle": "spadikam",
    "yearOfRelease": "2018",
    "rating": 4.5,
    "comment": "Thrilling Experience",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTU3ZjEzMTYtYThjMC00ZjljLNzA@._V1_QL50_SY1000__.jpg"
  };
  public searchTitle;
  @Input('parentData') public search;
  private msg;
  
  public moviesMatching: IMovieIn[];
  public moviesList: IMovieIn[];
  constructor(private inputservice: InputService, private route: ActivatedRoute,private router:Router,private movieService:MovieService,private data:DataService) {
    console.log("hello constructor")
    
   }
  

  ngOnInit() {
    this.data.currentMovie.subscribe(movieList=>this.moviesMatching=movieList);
    // console.log("init")
    // this.searchMovie();
  }
  // searchMovie() {
  //   this.route.paramMap.subscribe((params: ParamMap) => {
  //     let title = params.get('title');
  //     this.searchTitle = title;
  //   });
  //   this.inputservice.searchMovie(this.msg).subscribe((data) => {
  //     this.moviesMatching = data['Search'];
  //     console.log("inside component data is ", this.moviesMatching);
  //     console.log("init");
  //   });
  // }
  addMovie(id:string)
  {
    console.log("add movie in movie list");
    this.router.navigate([id],{relativeTo:this.route});
  }

  saveMovie(id:string,title:string,year:string,rating:number,url:string,comment:string)
  {
    console.log("save movie called");
    this.movie.imdbId=id;
    this.movie.movieTitle=title;
    this.movie.yearOfRelease=year;
    this.movie.rating=rating;
    this.movie.posterUrl=url;
    this.movie.comment=comment;
    console.log(this.movie);
    this.movieService.postMovie(this.url,this.movie);
  }
  // changeMovieList()
  // {
  //   this.inputservice.searchMovie(this.search).subscribe((data) => {
  //     this.moviesList = data['Search'];
  //   });
  // }

}
