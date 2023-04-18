import { VehicleStatus } from '@core/entities/vehicle.entity';
import { Vehicle } from '../use-cases/save-vehicle.usecase.interface';

export type CarShopVehicleRepositoryType = {
  idVehicle: string;
  type: string;
  auction: boolean;
  salvage: boolean;
  vehicle: Vehicle;
  status: VehicleStatus;
};
