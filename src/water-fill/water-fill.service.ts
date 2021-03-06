import { Injectable, NotFoundException, HttpService } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';
import { AxiosResponse } from 'axios';

import { WaterFill } from './water-fill.interface';
import { CreateWaterFillDto, UpdateWaterFillDto } from './dto';

@Injectable()
export class WaterFillService {
  private readonly url = 'https://api.particle.io/v1/devices/events';
  private readonly token = process.env.PARTICLE_TOKEN || '';

  constructor(
    private readonly http: HttpService,
    @InjectModel('waterfill') private readonly waterFillModel: Model<WaterFill>,
  ) { }

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

  async getLast(): Promise<WaterFill> {
    return (await this.waterFillModel.find({}).sort('-_id').limit(1))[0];
  }

  async update(id: string, dto: UpdateWaterFillDto): Promise<WaterFill> {
    const doc = await this.waterFillModel.findByIdAndUpdate(id, { $set: dto }, { new: true }).exec();
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

  sendActionOn(): Promise<AxiosResponse<any>> {
    const body = {
      name: 'actionEventOn',
      data: 'turnOn',
      private: true,
      ttl: 60,
    };

    return this.http.post(`${this.url}?access_token=${this.token}`, body).toPromise();
  }

  sendActionOff(): Promise<AxiosResponse<any>> {
    const body = {
      name: 'actionEventOff',
      data: 'turnOff',
      private: true,
      ttl: 60,
    };

    return this.http.post(`${this.url}?access_token=${this.token}`, body).toPromise();
  }
}
