
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { TodoModule } from './todo/todo.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [MongooseModule.forRoot('mongodb://todo-db:27017/todo',     {
              useNewUrlParser: true,
              useFindAndModify: false
            }),      
            TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}