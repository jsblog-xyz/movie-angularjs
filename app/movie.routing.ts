import { Routes, RouterModule } from '@angular/router';

import { MoviesOverviewComponent } from './movies-overview/movies-overview.component';
import { MovieViewerComponent } from './movie-viewer/movie-viewer.component';
import { MovieCreatorComponent } from './movie-creator/movie-creator.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';

const movieRoutes: Routes = [
  {
    path: 'movies',
    component: MoviesOverviewComponent
  },
  {
    path: 'movies/:id/view',
    component: MovieViewerComponent
  },
  {
    path: 'movies/:id/edit',
    component: MovieEditorComponent
  },
  {
    path: 'movies/new',
    component: MovieCreatorComponent
  },
  {
    path: '',
    redirectTo: '/movies',
    pathMatch: 'full'
  }
];
export const routing = RouterModule.forRoot(movieRoutes);
