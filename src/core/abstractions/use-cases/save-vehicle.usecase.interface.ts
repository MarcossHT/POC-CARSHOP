import { IUseCase } from './use-case';

export type SaveVehicleUsecaseInput = {
  type: string;
  auction: boolean;
  salvage: boolean;
  vehicle: Vehicle;
};

export type Vehicle = {
  brand: string;
  model: string;
  value: number;
  year: number;
};

export type SaveVehicleUsecaseOutput = {
  idVehicle: string;
  message: string;
};

export abstract class ISaveVehicleUsecase
  implements
    IUseCase<SaveVehicleUsecaseInput, Promise<SaveVehicleUsecaseOutput>>
{
  abstract execute(
    input: SaveVehicleUsecaseInput,
  ): Promise<SaveVehicleUsecaseOutput>;
}
