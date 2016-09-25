/// <reference path="./typings/index.d.ts" />

class ItemController {
    constructor(private $routeParams: any) {
        this.id = $routeParams.id;
    }
}

angular.module('app.item', [])
    .controller('ItemController', ItemController);
