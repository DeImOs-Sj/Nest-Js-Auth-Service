import { Controller, Get } from '@nestjs/common';

@Controller('todo')
export class TodoController {

    @Get('create')
    createTodo(){
        return{
            "number":1,
            "todo":20,
      "content": 'Hello world',
        }
    }
}
