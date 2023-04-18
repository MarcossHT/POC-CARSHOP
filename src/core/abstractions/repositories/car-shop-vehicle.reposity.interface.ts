import { VehicleStatus } from '@core/entities/vehicle.entity';
import { Vehicle } from '../use-cases/save-vehicle.usecase.interface';
import { CarShopVehicleRepositoryType } from './car-shop-vehicle.reposity.payload';

import { GetAllVehiclesRepositoryType } from './get-all-vehicles.repository.payload';

export type BuildVehicleInput = {
  idVehicle: string;
  type: string;
  auction: boolean;
  salvage: boolean;
  vehicle: Vehicle;
  status: VehicleStatus;
};

export type UpdateVehicleRepositoryInput = {
  idVehicle: string;
};

export abstract class ICarShopvehicleRepository {
  abstract build(
    input: BuildVehicleInput,
  ): Promise<CarShopVehicleRepositoryType>;

  abstract getAllVehicles(): Promise<GetAllVehiclesRepositoryType>;
  abstract updateVehicle(
    input: UpdateVehicleRepositoryInput,
  ): Promise<CarShopVehicleRepositoryType>;
}
