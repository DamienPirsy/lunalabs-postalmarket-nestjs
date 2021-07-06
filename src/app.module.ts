import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriesModule } from './categories/categories.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { JwtService } from '@nestjs/jwt';


@Module({
  imports: [
    MongooseModule.forRootAsync({
      useFactory: () => ({
        uri: 'mongodb://root:example@localhost:27017/postal_market?authSource=admin',
      }),
    }),
    CategoriesModule,
    AuthModule,
    UsersModule
    // MongooseModule.forRoot(
    //   'mongodb://root:example@localhost:27017/postal_market?authSource=admin'),
    // CategoriesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
