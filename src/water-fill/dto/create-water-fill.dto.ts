import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWaterFillDto {
  @IsNotEmpty()
  @IsNumber()
  readonly value: number;

  @IsNotEmpty()
  @IsNumber()
  readonly timestamp: number;
}