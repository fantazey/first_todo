import express from "express";
// Logs each server request to the console
import logger from "morgan";
// Takes information from POST requests and puts it into an object
import bodyParser from "body-parser";
// Allows for PUT and DELETE methods to be used in browsers where they
// are not supported
import methodOverride from "method-override";
// Wrapper for interacting with MongoDB
import mongoose from "mongoose";
import path from 'path';

import mainController from "./controllers/main";

// DB configuration
mongoose.connect( "mongodb://localhost:27017/todoDB" );
mongoose.connection.on( "error", function() {
    console.log( "Connection error. Check DB" );
    process.exit( 1 );
} );
// App configuration
let app = express(); // create app instance
app.set( "port", process.env.PORT || 3000 );
app.set( "views", path.join( __dirname, "..", "views") );
app.set( "view engine", "jade" );
app.use(
    express.static(
        path.join( __dirname, "..", "public" )
    )
);
app.use( logger( "dev" ) );
app.use( bodyParser.json() );
app.use( methodOverride() );
// configure routes
app.get( "/", mainController.getIndex );
app.get( "/templates/:template", mainController.getTemplate );
app.get( "/todos", mainController.getAllTodos );
app.post( "/todos", mainController.postNewTodo );
app.delete( "/todos:id", mainController.deleteTodo );
//start app
app.listen(
    app.get("port"), function () {
        console.log( `App listening port ${ app.get( "port" ) }!` );
    }
);