import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IMovie } from './movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  //private url="/assets/data/movies.json";
  private url = "http://localhost:8080/api/v1";
  constructor(private http: HttpClient) { }
  getMovies(): Observable<IMovie[]> {
    console.log("service get called");

    return this.http.get<IMovie[]>(this.url);
  }

  postMovie(urlin:string,movie:IMovie)
  {
    console.log("iam post")
    this.http.post(urlin,movie
    ).subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  deleteMovie(id:string)
  {
    console.log("delete in service");
    console.log(id);
    const deleteurl=`${this.url}/${id}`;
    this.http.delete(deleteurl).subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  updateMovie(id:string,comment:string)
  {
    console.log("update in service");
    console.log(id);
    const updateurl=`${this.url}/${id}`;
    this.http.put(updateurl,comment).subscribe(
      data => {
          console.log("POST Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
  getMovieList(title:string):Observable<IMovie[]>
  {
    console.log("get in service");
    console.log(title);
    const geturl=`${this.url}/${title}`;
    this.http.get<IMovie[]>(geturl).subscribe(
      data => {
          console.log("get Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
    return this.http.get<IMovie[]>(geturl);
  }
  searchMovie(title:string)
  {
    console.log("get in service");
    console.log(title);
    let preomdburl= "http://www.omdbapi.com/?s=";
    let postomdburl= "&type=movie&apikey=2cc7c887"
    const geturl=`${preomdburl}${title}${postomdburl}`;
    this.http.get(geturl).subscribe(
      data => {
          console.log("get Request is successful ", data);
      },
      error => {
          console.log("Error", error);
      });
  }
}
