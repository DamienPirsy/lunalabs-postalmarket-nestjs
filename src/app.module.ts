import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://root:example@localhost:27017/postal_market?authSource=admin',
      }),
    }),
    CategoriesModule
    // MongooseModule.forRoot(
    //   'mongodb://root:example@localhost:27017/postal_market?authSource=admin'),
    // CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
