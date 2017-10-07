import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MovieComponent } from './movie.component';
import { routing } from './movie.routing';

import { MoviesOverviewComponent } from './movies-overview/movies-overview.component';
import { MovieViewerComponent } from './movie-viewer/movie-viewer.component';
import { MovieEditorComponent } from './movie-editor/movie-editor.component';
import { MovieCreatorComponent } from './movie-creator/movie-creator.component';
import { MovieDataService } from './shared/movie-data.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    MovieComponent,
    MoviesOverviewComponent,
    MovieViewerComponent,
    MovieCreatorComponent,
    MovieEditorComponent
  ],
  providers: [
    MovieDataService
  ],
  bootstrap: [
    MovieComponent
  ]
})
export class MovieModule { }
