import { Document } from 'mongoose';

export interface WaterFill extends Document {
  readonly level: number;
  readonly timestamp: number;
}