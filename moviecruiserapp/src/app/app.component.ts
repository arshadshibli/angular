import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit {
  public search="";
  title = 'moviecruiserapp';
  constructor(private router:Router,private route:ActivatedRoute,private data:DataService){}
 getMovies(serach:string)
 {
   this.sendtoDataservice(serach)
   this.search=serach;
   console.log("get movies called")
    this.router.navigate(["movies",serach],{relativeTo:this.route});
 }
 sendtoDataservice(str:string)
  {
    this.data.changeMovie(str);
  }
  ngOnInit()
  {
    
  }
}
