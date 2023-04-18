import { IGetAllVehiclesUsecase } from '@core/abstractions/use-cases/get-all-vehicles.usecase.interface';
import { ISaveVehicleUsecase } from '@core/abstractions/use-cases/save-vehicle.usecase.interface';
import { IUpdateVehicleUsecase } from '@core/abstractions/use-cases/update-vehicle.usecase.inteface';
import { GetAllVehiclesUsecase } from '@core/use-cases/get-all-vehicles.usecase';
import { SaveVehicleUsecase } from '@core/use-cases/save-vehicle.usecase';
import { UpdateVehicleUsecase } from '@core/use-cases/update-vehicle.usecase';
import { Module } from '@nestjs/common';
import { CarShopController } from '@presentation/http/v1/controllers/carShop.controller';
import { HealthController } from '@presentation/http/v1/controllers/health.controller';
import { InfraModule } from './infra.module';

@Module({
  imports: [InfraModule],
  controllers: [HealthController, CarShopController],
  providers: [
    {
      provide: InfraModule,
      useClass: InfraModule,
    },
    {
      provide: ISaveVehicleUsecase,
      useClass: SaveVehicleUsecase,
    },
    {
      provide: IGetAllVehiclesUsecase,
      useClass: GetAllVehiclesUsecase,
    },
    {
      provide: IUpdateVehicleUsecase,
      useClass: UpdateVehicleUsecase,
    },
  ],
})
export class PresentationModule {}
