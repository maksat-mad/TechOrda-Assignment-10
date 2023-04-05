import {Component, inject, OnInit, TemplateRef} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {MovieService} from "../../services/movie.service";
import {Observable, switchMap} from "rxjs";
import {Movie} from "../../modals/movie";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: [`.width-550 {
    width: 550px;
  }
  .cursor-pointer {
    cursor: pointer;
  }`]
})
export class MovieComponent implements OnInit {
  route = inject(ActivatedRoute);
  router = inject(Router);
  movieService = inject(MovieService);
  modalService = inject(NgbModal);
  movie: Observable<Movie | undefined> | undefined;

  ngOnInit(): void {
    this.movie = this.route.paramMap.pipe(
      switchMap(paramMap => this.movieService.getMovieById(+paramMap.get('movieId')!))
    )
  }

  noSuchMovie() {
    this.router.navigate(['not-found']);
  }

  openImageAsModal(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }
}
