import { ICarShopvehicleRepository } from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import {
  IUpdateVehicleUsecase,
  UpdateVehicleInput,
  UpdateVehicleOutput,
} from '@core/abstractions/use-cases/update-vehicle.usecase.inteface';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class UpdateVehicleUsecase implements IUpdateVehicleUsecase {
  constructor(
    private readonly _carShopvehicleRepository: ICarShopvehicleRepository,
  ) {}

  async execute(input: UpdateVehicleInput): Promise<UpdateVehicleOutput> {
    try {
      const response = await this._carShopvehicleRepository.updateVehicle(
        input,
      );
      return {
        idVehicle: response.idVehicle,
        message:
          'Vehicle updated successfully, congratulations for your sell service!',
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
