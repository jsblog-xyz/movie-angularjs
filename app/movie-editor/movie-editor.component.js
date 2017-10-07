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
var router_1 = require('@angular/router');
var movie_1 = require('../shared/movie');
var movie_data_service_1 = require('../shared/movie-data.service');
var MovieEditorComponent = (function () {
    function MovieEditorComponent(router, route, movieDataService) {
        this.router = router;
        this.route = route;
        this.movieDataService = movieDataService;
        this.movie = new movie_1.Movie();
    }
    MovieEditorComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.movieDataService.getMovie(id).then(function (movie) { return _this.movie = movie; });
        });
    };
    MovieEditorComponent.prototype.saveMovie = function () {
        this.movieDataService.save(this.movie);
        this.router.navigate(['/movies']);
    };
    MovieEditorComponent = __decorate([
        core_1.Component({
            templateUrl: 'app/movie-creator/movie-creator.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, router_1.ActivatedRoute, movie_data_service_1.MovieDataService])
    ], MovieEditorComponent);
    return MovieEditorComponent;
}());
exports.MovieEditorComponent = MovieEditorComponent;
//# sourceMappingURL=movie-editor.component.js.map