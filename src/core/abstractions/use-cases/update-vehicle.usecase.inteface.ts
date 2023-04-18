import { IUseCase } from './use-case';

export type UpdateVehicleInput = {
  idVehicle: string;
};

export type UpdateVehicleOutput = {
  idVehicle: string;
  message: string;
};

export abstract class IUpdateVehicleUsecase
  implements IUseCase<UpdateVehicleInput, Promise<UpdateVehicleOutput>>
{
  abstract execute(input: UpdateVehicleInput): Promise<UpdateVehicleOutput>;
}
