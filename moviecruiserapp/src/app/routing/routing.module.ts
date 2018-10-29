import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from '../component/movie-list/movie-list.component';
import { WishListComponent } from '../component/wish-list/wish-list.component';
const routes:Routes=[
  {path:'movies/:title',component:MovieListComponent
},
  {path:'wishList',component:WishListComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  declarations: []
})
export class RoutingModule { }
export const routingComponents=[MovieListComponent,WishListComponent]
