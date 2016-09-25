/// <reference path="./typings/index.d.ts" />

class AppController {
    constructor(private $router: any) {
        $router.config([
            { path: '/', component: 'home' }
        ]);
    }
}

angular.module('myApp', ['ngNewRouter', 'app.home'])
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    })
    .controller('AppController', ['$router', AppController]);
