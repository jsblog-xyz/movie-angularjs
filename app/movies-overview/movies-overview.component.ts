import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Movie } from '../shared/movie';
import { MovieDataService } from '../shared/movie-data.service';

@Component({
  templateUrl: 'app/movies-overview/movies-overview.component.html'
})
export class MoviesOverviewComponent implements OnInit {
  movies: Movie[] = [];
  error: any;
  constructor(
    private router: Router,
    private movieDataService: MovieDataService) { }

  ngOnInit() {
    this.movieDataService.getMovies().then(movies => this.movies = movies );
  }

  deleteMovie(movie: Movie, event: any): void {
    event.stopPropagation();

    this.movieDataService.delete(movie).then(res => {
      this.movies = this.movies.filter(m => m !== movie);
    }).catch(error => this.error = error);
  }
}
