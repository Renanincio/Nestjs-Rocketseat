import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot("mongodb+srv://renanincioprgmdr:UL4WDuH3kMX9hvTw@cluster0.czjrhjs.mongodb.net/"), UsersModule],
})
export class AppModule {}

// UL4WDuH3kMX9hvTw