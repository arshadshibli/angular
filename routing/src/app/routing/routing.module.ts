import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes, RouterLink } from '@angular/router';
import { UserListComponent } from '../user-list/user-list.component';
import { MovieListComponent } from '../movie-list/movie-list.component';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserproFileComponent } from '../userpro-file/userpro-file.component';
import { UserAddressComponent } from '../user-address/user-address.component';
import { MovieFormComponent } from '../movie-form/movie-form.component';

const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'movies', component: MovieListComponent },
  {path:'addMovie',component:MovieFormComponent},
  {
    path: 'users/:id', component: UserDetailsComponent,
    children: [
      { path: 'profile', component: UserproFileComponent },
      { path: 'address', component: UserAddressComponent }]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
export const routingComponenets = [MovieListComponent,MovieFormComponent, UserListComponent, UserDetailsComponent, UserAddressComponent, UserproFileComponent];
