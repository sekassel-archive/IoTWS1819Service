import { Model } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { WaterFill } from './water-fill.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateWaterFillDto, UpdateWaterFillDto } from './dto';

@Injectable()
export class AppService {
  constructor(@InjectModel('WaterFill') private readonly waterFillModel: Model<WaterFill>) { }

  async create(dto: CreateWaterFillDto): Promise<WaterFill> {
    return this.waterFillModel.create(dto);
  }

  async getAll(timestamp: number): Promise<WaterFill[]> {
    const query = timestamp || 0;
    return this.waterFillModel.find({ timestamp: { $gt: query }}).exec();
  }

  async getOne(id: string): Promise<WaterFill> {
    const doc = await this.waterFillModel.findById(id);
    if (!doc) {
      throw new NotFoundException();
    }
    return doc;
  }

  async update(id: string, dto: UpdateWaterFillDto): Promise<WaterFill> {
    const doc = this.waterFillModel.findByIdAndUpdate(id, { $set: dto }, { new: true }).exec();
    if (!doc) {
      throw new NotFoundException();
    }
    return doc;
  }

  async delete(id: string): Promise<WaterFill> {
    const doc = await this.waterFillModel.findByIdAndDelete(id).exec();
    if (!doc) {
      throw new NotFoundException();
    }
    return doc;
  }
}
