import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { MovieListComponent } from './component/movie-list/movie-list.component';
import { WishListComponent } from './component/wish-list/wish-list.component';
import { RoutingModule, routingComponents } from './routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import { MovieCardComponent } from './component/movie-card/movie-card.component';
import { WishCardComponent } from './component/wish-card/wish-card.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    MovieListComponent,
    WishListComponent,
    MovieCardComponent,
    WishCardComponent,
  ],
  imports: [
    BrowserModule,RoutingModule,HttpClientModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent,routingComponents]
})
export class AppModule { }
