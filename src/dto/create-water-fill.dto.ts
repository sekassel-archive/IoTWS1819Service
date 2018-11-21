import { IsNotEmpty, IsNumber } from 'class-validator';

export class CreateWaterFillDto {
  @IsNotEmpty()
  @IsNumber()
  readonly level: number;

  @IsNotEmpty()
  @IsNumber()
  readonly timestamp: number;
}