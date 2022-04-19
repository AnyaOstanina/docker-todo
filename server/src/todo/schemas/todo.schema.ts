import * as mongoose from 'mongoose';

export const TodoSchema = new mongoose.Schema({
   
    id: String,
    text: {type: String, default: 'default'},
    isDone: {type: Boolean, default: false}    
    
}, { timestamps: true});