import { Document } from 'mongoose';

export interface WaterFill extends Document {
  readonly value: number;
  readonly timestamp: number;
}
