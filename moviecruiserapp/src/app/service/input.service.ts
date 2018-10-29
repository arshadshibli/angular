import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InputService {

  // private movieSource=new BehaviorSubject<IMovieIn[]>([]);
  // currentMovie=this.movieSource.asObservable();
  // changeMovieSource(movieList:IMovieIn[])
  // {
  //   this.movieSource.next(movieList);
  // }
  public returnedObject: Object;
  constructor(private http: HttpClient) { }


  searchMovie(title: string): Observable<Input> {
    console.log("search in service");
    console.log(title);
    let preomdburl = "http://www.omdbapi.com/?s=";
    let postomdburl = "&type=movie&apikey=2cc7c887"
    const geturl = `${preomdburl}${title}${postomdburl}`;
    this.http.get(geturl).subscribe(
      data => {
        console.log("get Request is successful ", data);
        this.returnedObject = data;
      },
      error => {
        console.log("Error", error);
      });
    console.log("hii");
    console.log(this.returnedObject);
    return this.http.get<Input>(geturl);
  }
  getMovie(id:string) {
    console.log("search in service");
    console.log(id);
    let preomdburl = "http://www.omdbapi.com/?i=";
    let postomdburl = "&type=movie&apikey=2cc7c887"
    const geturl = `${preomdburl}${id}${postomdburl}`;
    this.http.get(geturl).subscribe(
      data => {
        console.log("get Request is successful ", data);
      },
      error => {
        console.log("Error", error);
      });
    return this.http.get(geturl);
  }
}
