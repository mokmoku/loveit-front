/// <reference path="./typings/index.d.ts" />

class HomeController {
    constructor(private $routeParams: any) {
        this.name = "Friend";
    }
}

angular.module('app.home', [])
    .controller('HomeController', HomeController);
