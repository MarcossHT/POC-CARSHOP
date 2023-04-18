import { IsNumber, IsString } from 'class-validator';

export class VehicleModel {
  @IsString({
    message: 'brand is a string',
  })
  brand: string;

  @IsString({
    message: 'model is a string',
  })
  model: string;

  @IsNumber(
    {},
    {
      message: 'value is a number',
    },
  )
  value: number;

  @IsNumber(
    {},
    {
      message: 'year is a number',
    },
  )
  year: number;
}
