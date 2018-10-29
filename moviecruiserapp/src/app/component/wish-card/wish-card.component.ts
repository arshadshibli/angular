import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from 'src/app/service/movie.service';

@Component({
  selector: 'app-wish-card',
  templateUrl: './wish-card.component.html',
  styleUrls: ['./wish-card.component.css']
})
export class WishCardComponent implements OnInit {
  @Input('parentData') public movie;
  constructor(private movieservice:MovieService) { }

  ngOnInit() {
  }

  deleteMovie(id:string)
  {
    console.log("deleteMobie  in list");
    this.movieservice.deleteMovie(id);
    window.location.reload(true);
  }
  updateMovie(id:string,comment:string)
  {
    console.log("updatee Mobie  in list");
    this.movieservice.updateMovie(id,comment);
  }

}
