import { Module, HttpModule } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { DocsController } from './docu';
import { WaterFillController, WaterFillSchema, WaterFillService } from './water-fill';


@Module({
  imports: [
    HttpModule.register({ timeout: 5000 }),
    MongooseModule.forRoot('mongodb://mongo:27017/waterfill'),
    MongooseModule.forFeature([{ name: 'WaterFill', schema: WaterFillSchema }]),
  ],
  controllers: [WaterFillController, DocsController],
  providers: [WaterFillService],
})
export class AppModule {}
