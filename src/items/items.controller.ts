/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Put, Delete, Body, Param, Response } from '@nestjs/common';
import { Response as res } from 'express';
import { CreateTodoDto } from './dto/create-todo-dto';
import { ItemsService } from './items.service';
import { Todo } from './Interfaces/todo.interface';
 
@Controller('todos')
export class ItemsController {

    constructor(private readonly todoService: ItemsService) {}

    @Get()
    async findAll(): Promise<Todo[]> {
        return this.todoService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id): Promise<Todo> {
        return this.todoService.findOne(id);
    }

    @Post()
    async create(@Body() CreateTodoDto: CreateTodoDto, @Response() res:res): Promise<void> {
        const result = await this.todoService.create(CreateTodoDto);

        res.status(200).location(`/todos/${result._id}`);

        res.json({status: 'Success'});
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Todo> {
        return this.todoService.delete(id);
    }

    @Put(':id')
    update(@Body() updateTodoDto: CreateTodoDto, @Param('id') id): Promise<Todo> {
        return this.todoService.update(id, updateTodoDto)
    }

}
