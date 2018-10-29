import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public users=[
    {"id":1,"name":"Arshad","Age":22},
    {"id":2,"name":"Shibli","Age":23},
    {"id":3,"name":"Akash","Age":56},
    {"id":4,"name":"Raj","Age":43},
    {"id":5,"name":"Abito","Age":78}
  
  ]
 
  constructor() { }
  getUsers()
  {
    return this.users;
  }
  getUser(id)
  {
    let userOut,i;
    for(i=0;i<this.users.length;i++)
    {
      if (this.users[i].id==id)
      userOut=this.users[i];
    }
    return userOut;
  }
}
