import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  public userId;
  public user={};
  constructor(private route:ActivatedRoute,private userService:UsersService,private router:Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
    // let id=parseInt(this.route.snapshot.paramMap.get("id"));
    // this.userId=id;
    this.route.paramMap.subscribe((params:ParamMap)=>{
    let id=parseInt(params.get('id'));
    this.userId=id;
    this.user=this.userService.getUser(this.userId);
    })
    
  }
  goPrevious()
  {
    let previousId=this.userId-1;
    this.router.navigate(["../",previousId],{relativeTo:this.route});
  }
  goNext()
  {
    let nextId=this.userId+1;
    this.router.navigate(["../",nextId],{relativeTo:this.route});
  }
  goToDepartments()
  {
    let selectedId=this.userId? this.userId:null;
    this.router.navigate(["/users",{id:selectedId}])
  }
  getProfile()
  {
    this.router.navigate(["profile"],{relativeTo:this.route})
  }
  getAddress()
  {
    this.router.navigate(["address"],{relativeTo:this.route})
  }

}
