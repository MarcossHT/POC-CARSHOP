import { Vehicle } from './save-vehicle.usecase.interface';
import { IUseCase } from './use-case';

export type AllVehiclesOutput = {
  vehicles: Array<vehicleData>;
};

export type vehicleData = {
  type: string;
  auction: boolean;
  salvage: boolean;
  vehicle: Vehicle;
  idVehicle: string;
};

export abstract class IGetAllVehiclesUsecase
  implements IUseCase<void, Promise<AllVehiclesOutput>>
{
  abstract execute(input: void): Promise<AllVehiclesOutput>;
}
