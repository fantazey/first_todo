import Todo from "../models/todo";

let mainController = {
    getIndex: ( request, response ) => {
        response.render( "index" );
    },
    getTemplate: ( request, response ) => {
        response.render( "templates/" + request.params.template );
    },
    getAllTodos: ( request, response ) => {
        Todo.find( {}, ( err, todos ) => {
            if ( err ) {
                return response.send( err );
            }
            response.json( todos );
        } );
    },
    postNewTodo: ( request, response ) => {
        Todo.create( {
            text: request.params.text,
            done: false
        }, ( err, todo ) => {
            if ( err ) {
                return response.send( err );
            }
            Todo.find( {}, ( err, todos ) => {
                if ( err ) {
                    return response.send( err )
                }
                response.json( todos );
            } )
        } );
    },
    deleteTodo: ( request, response ) => {
        Todo.remove( {
            _id: request.params.id
        }, ( err, todo ) => {
            if ( err ) {
                return response.send( err )
            }
            Todo.find( {}, ( err, todos ) => {
                if ( err ) {
                    return response.send( err )
                }
                response.json( todos );
            } )
        } );
    }
};
export default mainController;