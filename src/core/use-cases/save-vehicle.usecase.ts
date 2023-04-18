import { ICarShopvehicleRepository } from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import {
  ISaveVehicleUsecase,
  SaveVehicleUsecaseInput,
  SaveVehicleUsecaseOutput,
} from '@core/abstractions/use-cases/save-vehicle.usecase.interface';
import { IUuidUtils } from '@core/abstractions/utils/uuid.utils.interface';
import { Injectable, InternalServerErrorException } from '@nestjs/common';

@Injectable()
export class SaveVehicleUsecase implements ISaveVehicleUsecase {
  constructor(
    private readonly _carShopvehicleRepository: ICarShopvehicleRepository,
    private readonly uuidUtils: IUuidUtils,
  ) {}

  async execute(
    input: SaveVehicleUsecaseInput,
  ): Promise<SaveVehicleUsecaseOutput> {
    try {
      const idVehicle = this.uuidUtils.buildUUID();
      const response = await this._carShopvehicleRepository.build({
        idVehicle: idVehicle,
        type: input.type,
        auction: input.auction,
        salvage: input.salvage,
        vehicle: input.vehicle,
        status: 'AVAILABLE',
      });

      return {
        idVehicle: response.idVehicle,
        message: 'Vehicle created successfully',
      };
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
