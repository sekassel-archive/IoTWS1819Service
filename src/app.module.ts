import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DocsController } from './docu';
import { WaterFillController, WaterFillSchema, WaterFillService } from './water-fill';


@Module({
  imports: [
    HttpModule.register({ timeout: 5000 }),
    //MongooseModule.forRoot(`mongodb://waterfill:${process.env.MONGO_PASS}@database:27017/iot-services`),
    MongooseModule.forRoot(`mongodb://localhost:27017/iot-services`),
    MongooseModule.forFeature([{ name: 'waterfill', schema: WaterFillSchema }]),
  ],
  controllers: [WaterFillController, DocsController],
  providers: [WaterFillService],
})
export class AppModule {}
