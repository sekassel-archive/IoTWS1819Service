import { Schema } from 'mongoose';

export const WaterFillSchema = new Schema(
  {
     value: Number,
     timestamp: Number,
  },
);