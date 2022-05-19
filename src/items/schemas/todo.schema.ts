/* eslint-disable prettier/prettier */
import  * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
    todo: String,
    status: String
});