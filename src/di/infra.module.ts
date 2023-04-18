import { ICarShopvehicleRepository } from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import { IUuidUtils } from '@core/abstractions/utils/uuid.utils.interface';
import {
  CarShopVehicleModel,
  CarShopVehicleModelSchema,
} from '@infra/data/mongo/entities/car-shop-vehicle.entity';
import { CarShopvehicleRepository } from '@infra/data/mongo/repositories/car-shop-vehicle.repositoy';
import { UuidUtils } from '@infra/data/utils/uuid.utils';
import { Module, Provider } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

const infraProviders: Provider[] = [
  {
    provide: IUuidUtils,
    useClass: UuidUtils,
  },
  {
    provide: ICarShopvehicleRepository,
    useClass: CarShopvehicleRepository,
  },
];

@Module({
  imports: [
    ConfigModule.forRoot(),

    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      {
        name: CarShopVehicleModel.name,
        schema: CarShopVehicleModelSchema,
      },
    ]),
  ],
  providers: infraProviders,
  exports: infraProviders,
})
export class InfraModule {}
