/// <reference path="./typings/index.d.ts" />

class AppController {
    constructor(private $router: any) {
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
