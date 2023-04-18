import { IsString } from 'class-validator';

export class UpdateVehicleModelInput {
  @IsString({
    message: 'idVehicle is a string',
  })
  idVehicle: string;
}

export class UpdateVehicleModelOutput {
  idVehicle: string;
  message: string;
}
