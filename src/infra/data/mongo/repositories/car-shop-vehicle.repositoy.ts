import {
  BuildVehicleInput,
  ICarShopvehicleRepository,
  UpdateVehicleRepositoryInput,
} from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import { CarShopVehicleRepositoryType } from '@core/abstractions/repositories/car-shop-vehicle.reposity.payload';
import { GetAllVehiclesRepositoryType } from '@core/abstractions/repositories/get-all-vehicles.repository.payload';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {
  CarShopVehicleModel,
  CarShopVehicleModelDocument,
} from '../entities/car-shop-vehicle.entity';
import { VehicleCarShopAdapter } from './car-shop-vehicle.adapter';
import { GetAllVehiclesAdapter } from './get-all-vehicles.adapter';

@Injectable()
export class CarShopvehicleRepository implements ICarShopvehicleRepository {
  constructor(
    @InjectModel(CarShopVehicleModel.name)
    private _carShopVehicleModel: Model<CarShopVehicleModelDocument>,
  ) {}

  async build({
    idVehicle,
    type,
    auction,
    salvage,
    vehicle,
    status,
  }: BuildVehicleInput): Promise<CarShopVehicleRepositoryType> {
    const vehicleParams = await this._carShopVehicleModel.create({
      idVehicle,
      type,
      auction,
      salvage,
      vehicle,
      status,
    });

    const doc = await vehicleParams.save();

    return VehicleCarShopAdapter.requestToDomain(doc);
  }

  async getAllVehicles(): Promise<GetAllVehiclesRepositoryType> {
    const doc = await this._carShopVehicleModel.find({ status: 'AVAILABLE' });

    return GetAllVehiclesAdapter.requestToDomain(doc);
  }

  async updateVehicle(
    input: UpdateVehicleRepositoryInput,
  ): Promise<CarShopVehicleRepositoryType> {
    const doc = await this._carShopVehicleModel.findOneAndUpdate(
      { idVehicle: input.idVehicle },
      { status: 'SOLD' },
    );

    return VehicleCarShopAdapter.requestToDomain(doc);
  }
}
