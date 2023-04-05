import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {MoviesComponent} from "./pages/movies/movies.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {MovieComponent} from "./pages/movie/movie.component";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movies',
    children: [
      {
        path: '',
        component: MoviesComponent
      },
      {
        path: ':movieId',
        component: MovieComponent
      },
      {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
