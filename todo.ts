/// <reference path="./typings/index.d.ts" />

class Todo {
    constructor(public text: string, public done: boolean = false) { }
}

interface TodoScope extends ng.IScope {
    todos: Array<Todo>;
    todoText: string;

    addTodo: Function;
    remaining: Function;
    archive: Function;
}

class TodoListController {
    constructor(private $scope: TodoScope) {
        $scope.todos = [
            new Todo('learn angular', true),
            new Todo('build an angular app', false)
        ];
        $scope.addTodo = angular.bind(this, this.addTodo);
        $scope.remaining = angular.bind(this, this.remaining);
        $scope.archive = angular.bind(this, this.archive);
        console.log($scope.todos);
    }

    addTodo() {
        this.$scope.todos.push(new Todo(this.$scope.todoText, false));
        this.$scope.todoText = '';
    }

    remaining(): number {
        var count = 0;
        angular.forEach(this.$scope.todos, (todo) => {
            count += todo.done ? 0 : 1;
        });
        return count;
    }

    archive() {
        var oldTodos = this.$scope.todos;
        this.$scope.todos = [];
        angular.forEach(oldTodos, (todo) => {
            if (!todo.done) {
                this.$scope.todos.push(todo);
            }
        });
    }
}

var app = angular.module('todoApp', [])
app.controller('TodoListController', ['$scope', TodoListController]);

