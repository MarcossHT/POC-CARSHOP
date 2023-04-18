import { ICarShopvehicleRepository } from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import {
  AllVehiclesOutput,
  IGetAllVehiclesUsecase,
} from '@core/abstractions/use-cases/get-all-vehicles.usecase.interface';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class GetAllVehiclesUsecase implements IGetAllVehiclesUsecase {
  constructor(
    private readonly _carShopvehicleRepository: ICarShopvehicleRepository,
  ) {}

  async execute(): Promise<AllVehiclesOutput> {
    try {
      return await this._carShopvehicleRepository.getAllVehicles();
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
