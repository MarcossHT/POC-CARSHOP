import { IGetAllVehiclesUsecase } from '@core/abstractions/use-cases/get-all-vehicles.usecase.interface';
import { ISaveVehicleUsecase } from '@core/abstractions/use-cases/save-vehicle.usecase.interface';
import { IUpdateVehicleUsecase } from '@core/abstractions/use-cases/update-vehicle.usecase.inteface';
import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { AllVehiclesModelOutput } from '../models/all-vehicles.model';
import {
  CarShopVehicleModelInput,
  CarShopVehicleModelOutput,
} from '../models/car-shop-vehicle.model';
import {
  UpdateVehicleModelInput,
  UpdateVehicleModelOutput,
} from '../models/update-vehicle.model';

@Controller({
  version: '1',
  path: 'carshop',
})
export class CarShopController {
  constructor(
    private readonly saveVehicleUsecase: ISaveVehicleUsecase,
    private readonly getAllVehiclesUsecase: IGetAllVehiclesUsecase,
    private readonly updateVehicleUsecase: IUpdateVehicleUsecase,
  ) {}

  @Post('/saveVehicle')
  async saveVehicle(
    @Body() input: CarShopVehicleModelInput,
  ): Promise<CarShopVehicleModelOutput> {
    return await this.saveVehicleUsecase.execute(input);
  }

  @Get('/getVehicles')
  async getAllVehicles(): Promise<AllVehiclesModelOutput> {
    return await this.getAllVehiclesUsecase.execute();
  }

  @Patch('/updateVehicle')
  async updateVehicle(
    @Body() input: UpdateVehicleModelInput,
  ): Promise<UpdateVehicleModelOutput> {
    return await this.updateVehicleUsecase.execute(input);
  }
}
