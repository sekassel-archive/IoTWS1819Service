import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WaterFillSchema } from './water-fill.schema';
import { DocuController } from './app.docu.controller';

@Module({
  imports: [
    HttpModule.register({ timeout: 5000 }),
    MongooseModule.forRoot('mongodb://database:27017/waterfill'),
    MongooseModule.forFeature([{ name: 'WaterFill', schema: WaterFillSchema }]),
  ],
  controllers: [AppController, DocuController],
  providers: [AppService],
})
export class AppModule {}
