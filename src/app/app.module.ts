import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CardComponent } from './components/UI/card/card.component';
import { SelectorComponent } from './components/UI/selector/selector.component';
import {FormsModule} from "@angular/forms";
import { MovieComponent } from './pages/movie/movie.component';
import { ExitButtonComponent } from './components/UI/exit-button/exit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    MoviesComponent,
    NotFoundComponent,
    CardComponent,
    SelectorComponent,
    MovieComponent,
    ExitButtonComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
