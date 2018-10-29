import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { RoutingModule, routingComponenets } from './routing/routing.module';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserproFileComponent } from './userpro-file/userpro-file.component';
import { UserAddressComponent } from './user-address/user-address.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieFormComponent } from './movie-form/movie-form.component';


@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    UserListComponent,
    UserDetailsComponent,
    UserproFileComponent,
    UserAddressComponent,
    MovieDetailsComponent,
    MovieFormComponent
  ],
  imports: [
    BrowserModule,RoutingModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,routingComponenets]
})
export class AppModule { }
