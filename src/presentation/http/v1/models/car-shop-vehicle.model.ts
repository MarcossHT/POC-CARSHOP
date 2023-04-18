import { IsBoolean, IsObject, IsString } from 'class-validator';
import { VehicleModel } from './vehicle.model';

export class CarShopVehicleModelInput {
  @IsString({
    message: 'type is a string',
  })
  type: string;

  @IsBoolean({
    message: 'auction is a boolean',
  })
  auction: boolean;

  @IsBoolean({
    message: 'salvage is a boolean',
  })
  salvage: boolean;

  @IsObject({
    message: 'vehicle is a object',
  })
  vehicle: VehicleModel;
}

export class CarShopVehicleModelOutput {
  idVehicle: string;
  message: string;
}
