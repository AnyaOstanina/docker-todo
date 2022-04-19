import { Controller, Post, Body, Get, Put, Delete, Param } from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDTO } from './dto/create-todo.dto';
import { Todo } from './interfaces/todo.interface';

@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

    //add a todo
    @Post()
    async addTodo(@Body() createTodoDTO: CreateTodoDTO) {
        return this.todoService.addTodo(createTodoDTO);
    }

    //get all todos
    @Get()
    async getAllTodos(): Promise<Todo[]> {
        return this.todoService.getAllTodo();
    }

    //get a todo
    @Get(':id')
    async getTodoById(@Param('id') id): Promise<Todo> {
        return this.todoService.getTodoById(id);
    }

    // update a todo
    @Put(':id')
    async updateTodo(@Param('id') id, @Body() createTodoDTO: CreateTodoDTO): Promise<Todo> {
        return this.todoService.updateTodo(id, createTodoDTO);        
    }

    // delete a todo 
    @Delete(':id')
    async deleteTodo(@Param('id') id): Promise<Todo> {  
        return this.todoService.deleteTodo(id);        
    }

}
