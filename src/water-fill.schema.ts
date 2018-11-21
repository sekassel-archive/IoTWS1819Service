import { Schema } from 'mongoose';

export const WaterFillSchema = new Schema(
  {
     level: Number,
     timestamp: Number,
  },
);