import { CarShopVehicleModelDocument } from '../entities/car-shop-vehicle.entity';

export class GetAllVehiclesAdapter {
  static requestToDomain(input: Array<CarShopVehicleModelDocument>): any {
    return {
      vehicles: input.map((v) => {
        return {
          idVehicle: v.idVehicle,
          type: v.type,
          auction: v.auction,
          salvage: v.salvage,
          vehicle: v.vehicle,
          status: v.status,
        };
      }),
    };
  }
}
