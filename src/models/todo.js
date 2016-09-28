import mongoose from "mongoose";

let todoSchema = new mongoose.Schema( {
    text: String
} );
export default mongoose.model( "Todo", todoSchema )