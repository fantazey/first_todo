import { bootstrap } from "angular2/platform/browser";
import { TodoComponent } from "./todoComponent";

let boot = document.addEventListener( "DOMContentLoaded", () => {
    bootstrap(TodoComponent);
} );
