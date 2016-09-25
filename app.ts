/// <reference path="./typings/index.d.ts" />

interface AppScope extends ng.IScope {
}

class AppController {
    constructor(private $router: AppScope) {
        $router.config([
            { path: '/item/:id', component: 'item' },
            { path: '/**', component: 'home' }
        ]);
    }
}

angular.module('app', ['ngNewRouter', 'app.home', 'app.item'])
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode({enabled: true, requireBase: true});
    })
    .controller('AppController', ['$router', AppController]);
