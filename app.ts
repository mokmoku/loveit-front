/// <reference path="./typings/index.d.ts" />

interface AppScope extends ng.IScope {
}

class AppController {
    constructor(private $router: AppScope) {
        $router.config([
            { path: '/', component: 'home' },
            { path: '/item/:id', component: 'item' }
        ]);
    }
}

angular.module('app', ['ngNewRouter', 'app.home', 'app.item'])
    .config(['$locationProvider', ($locationProvider) => {
        $locationProvider.html5Mode({enabled: true, requireBase: false});
    })
    .controller('AppController', ['$router', AppController]);
