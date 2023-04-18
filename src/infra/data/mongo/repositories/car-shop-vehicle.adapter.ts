import { CarShopVehicleRepositoryType } from '@core/abstractions/repositories/car-shop-vehicle.reposity.payload';
import { VehicleStatus } from '@core/entities/vehicle.entity';
import { CarShopVehicleModelDocument } from '../entities/car-shop-vehicle.entity';

export class VehicleCarShopAdapter {
  static requestToDomain(
    input: CarShopVehicleModelDocument,
  ): CarShopVehicleRepositoryType {
    return {
      idVehicle: input.idVehicle,
      type: input.type,
      auction: input.auction,
      salvage: input.salvage,
      vehicle: input.vehicle,
      status: input.status as VehicleStatus,
    };
  }
}
