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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var MovieDataService = (function () {
    function MovieDataService(http) {
        this.http = http;
        this.moviesUrl = 'http://localhost:3000/movies';
    }
    MovieDataService.prototype.getMovies = function () {
        return this.http.get(this.moviesUrl).toPromise().then(function (response) { return response.json(); }).catch(this.handleError);
    };
    MovieDataService.prototype.getMovie = function (id) {
        return this.getMovies().then(function (movies) { return movies.find(function (movie) { return movie.id === id; }); });
    };
    MovieDataService.prototype.post = function (movie) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this.http.post(this.moviesUrl, JSON.stringify(movie), { headers: headers }).toPromise().then(function (res) { return res.json().data; }).catch(this.handleError);
    };
    MovieDataService.prototype.put = function (movie) {
        var headers = new http_1.Headers();
        headers.append('Content-Type', 'application/json');
        var url = this.moviesUrl + "/" + movie.id;
        return this.http.put(url, JSON.stringify(movie), { headers: headers }).toPromise().then(function () { return movie; }).catch(this.handleError);
    };
    MovieDataService.prototype.delete = function (movie) {
        var url = this.moviesUrl + "/" + movie.id;
        return this.http.delete(url).toPromise().catch(this.handleError);
    };
    MovieDataService.prototype.save = function (movie) {
        if (movie.id) {
            return this.put(movie);
        }
        else {
            return this.post(movie);
        }
    };
    MovieDataService.prototype.handleError = function (error) {
        console.log('An error occured: ', error);
        return Promise.reject("error message: " + error);
    };
    MovieDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], MovieDataService);
    return MovieDataService;
}());
exports.MovieDataService = MovieDataService;
//# sourceMappingURL=movie-data.service.js.map