import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterFillSchema } from './water-fill.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://database:27017/waterfill'),
    MongooseModule.forFeature([{ name: 'WaterFill', schema: WaterFillSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
