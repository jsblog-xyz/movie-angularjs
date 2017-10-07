"use strict";
var router_1 = require('@angular/router');
var movies_overview_component_1 = require('./movies-overview/movies-overview.component');
var movie_viewer_component_1 = require('./movie-viewer/movie-viewer.component');
var movie_creator_component_1 = require('./movie-creator/movie-creator.component');
var movie_editor_component_1 = require('./movie-editor/movie-editor.component');
var movieRoutes = [
    {
        path: 'movies',
        component: movies_overview_component_1.MoviesOverviewComponent
    },
    {
        path: 'movies/:id/view',
        component: movie_viewer_component_1.MovieViewerComponent
    },
    {
        path: 'movies/:id/edit',
        component: movie_editor_component_1.MovieEditorComponent
    },
    {
        path: 'movies/new',
        component: movie_creator_component_1.MovieCreatorComponent
    },
    {
        path: '',
        redirectTo: '/movies',
        pathMatch: 'full'
    }
];
exports.routing = router_1.RouterModule.forRoot(movieRoutes);
//# sourceMappingURL=movie.routing.js.map