import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateWaterFillDto {
  @IsNotEmpty()
  @IsNumber()
  readonly level: number;
}