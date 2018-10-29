import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  public selectedId;
  public users=[];
  constructor(private userservice:UsersService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.users=this.userservice.getUsers();
    this.route.paramMap.subscribe((params:ParamMap)=>{
      let id=parseInt(params.get('id'));
      this.selectedId=id;
      })
  }
  onSelect(user)
  {
    // this.router.navigate(["/users",user.id])
    this.router.navigate([user.id],{relativeTo:this.route})
  }

}
