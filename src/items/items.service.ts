/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { Todo } from './Interfaces/todo.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
    
    constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

    async findAll(): Promise<Todo[]> {
        return await this.todoModel.find();
    }

    async findOne(id: string): Promise<Todo> {
        return await this.todoModel.findOne({ _id: id});
    }

    async create(item: Todo): Promise<Todo> {
        const newItem = new this.todoModel(item);
        return await newItem.save();
    }

    async delete(id: string): Promise<Todo> {
        return await this.todoModel.findByIdAndRemove(id);
    }

    async update(id: string, item: Todo): Promise<Todo> {
        return await this.todoModel.findByIdAndUpdate(id, item, { new: true });
      }
}
