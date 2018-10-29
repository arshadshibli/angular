import { Component, OnInit } from '@angular/core';
import { IMovie } from '../movie';
import { HttpClient } from '@angular/common/http';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  private url = "http://localhost:8080/api/v1";
  movie:IMovie={
    "imdbId":"defay",
    "movieTitle": "spadikam",
    "yearOfRelease": "2018",
    "rating": 4.5,
    "comment": "Thrilling Experience",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTU3ZjEzMTYtYThjMC00ZjljLNzA@._V1_QL50_SY1000__.jpg"
  };
  constructor(private http:HttpClient,private movieService:MovieService) { }

  ngOnInit() {
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
    // console.log("iam post")
    // this.http.post(this.url,
    // this.movie
    // ).subscribe(
    //   data => {
    //       console.log("POST Request is successful ", data);
    //   },
    //   error => {
    //       console.log("Error", error);
    //   });
    this.movieService.postMovie(this.url,this.movie);
  }

}
