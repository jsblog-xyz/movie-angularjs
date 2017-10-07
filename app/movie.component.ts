import { Component } from '@angular/core';

@Component({
  selector: 'movie-app',
  template: `
  <router-outlet></router-outlet>
  `
})
export class MovieComponent {
  title = 'The Movie App';
}
