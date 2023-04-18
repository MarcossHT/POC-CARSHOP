import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { VehicleModel } from './vehicle.entity';

@Schema({
  collection: 'car-shop-vehicle',
  timestamps: true,
})
export class CarShopVehicleModel {
  @Prop()
  idVehicle: string;
  @Prop()
  type: string;
  @Prop()
  auction: boolean;
  @Prop()
  salvage: boolean;
  @Prop()
  vehicle: VehicleModel;
  @Prop()
  status: string;
}

export type CarShopVehicleModelDocument = CarShopVehicleModel & Document;
export const CarShopVehicleModelSchema =
  SchemaFactory.createForClass(CarShopVehicleModel);
