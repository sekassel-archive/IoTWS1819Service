import { Model } from 'mongoose';
import { Injectable, NotFoundException, HttpService } from '@nestjs/common';
import { WaterFill } from './water-fill.interface';
import { InjectModel } from '@nestjs/mongoose';
import { CreateWaterFillDto, UpdateWaterFillDto } from './dto';
import { AxiosResponse } from 'axios';

@Injectable()
export class AppService {
  private readonly url = 'https://api.particle.io/v1/devices/events';
  private readonly token = '80f20479f03245fa59e402ebd50ae8c6c728a933';

  constructor(
    private readonly http: HttpService,
    @InjectModel('WaterFill') private readonly waterFillModel: Model<WaterFill>,
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
