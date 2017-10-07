"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var movie_component_1 = require('./movie.component');
var movie_routing_1 = require('./movie.routing');
var movies_overview_component_1 = require('./movies-overview/movies-overview.component');
var movie_viewer_component_1 = require('./movie-viewer/movie-viewer.component');
var movie_editor_component_1 = require('./movie-editor/movie-editor.component');
var movie_creator_component_1 = require('./movie-creator/movie-creator.component');
var movie_data_service_1 = require('./shared/movie-data.service');
var MovieModule = (function () {
    function MovieModule() {
    }
    MovieModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                movie_routing_1.routing,
                http_1.HttpModule
            ],
            declarations: [
                movie_component_1.MovieComponent,
                movies_overview_component_1.MoviesOverviewComponent,
                movie_viewer_component_1.MovieViewerComponent,
                movie_creator_component_1.MovieCreatorComponent,
                movie_editor_component_1.MovieEditorComponent
            ],
            providers: [
                movie_data_service_1.MovieDataService
            ],
            bootstrap: [
                movie_component_1.MovieComponent
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], MovieModule);
    return MovieModule;
}());
exports.MovieModule = MovieModule;
//# sourceMappingURL=movie.module.js.map