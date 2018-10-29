import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { IMovieIn } from '../moviein';
import { InputService } from './input.service';
import { IMovie } from '../movie';
import { HttpClient } from '@angular/common/http';
import { MovieService } from './movie.service';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  public moviesMatching:IMovieIn[];
  private movieSource=new BehaviorSubject<IMovieIn[]>([]);
  currentMovie=this.movieSource.asObservable();

  constructor(private inputservice:InputService,private movieservice:MovieService) { }
  changeMovie(message:string)
  {
    this.inputservice.searchMovie(message).subscribe((data) => {
      this.moviesMatching = data['Search'];
    this.movieSource.next(this.moviesMatching);});
  }

}