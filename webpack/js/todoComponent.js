// Import Component and View constructor (for metadata)
import { Component, View } from "angular2/core";
// We're using http in our TodoService, but we can only specify providers in the component
import { HTTP_PROVIDERS } from "angular2/http";
import { TodoService } from "./todoService";

class TodoComponent {
    constructor( todoService ) {
        this.todos = [];
        this.todoData = {
            text: ""
        };
        this.todoService = todoService;
        this.todoService.getAllTodos().subscribe(
            ( res ) => {
                this.todos = res;
            }
        )
    }
    createTodo() {
        this.todoService.postNewTodo( this.todoData ).subscribe(
            ( res ) => {
                this.todos = res;
                this.todoData.text = "";
            }
        )
    }
    deleteTodo() {
        this.todoService.deleteTodo( id ).subscribe(
            ( res ) => {
                this.todos = res;
            }
        )
    }
}
TodoService.annotations = [
    new Component(
        {
            selector: "todo-app", // tag to show app
            providers: [ TodoService, HTTP_PROVIDERS ],
            templateUrl: "templates/TodoComponent"
        }
    )
];
TodoComponent.parameters = [[ TodoService ]];

export { TodoComponent }