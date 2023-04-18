import { Prop } from '@nestjs/mongoose';

export class VehicleModel {
  @Prop()
  brand: string;
  @Prop()
  model: string;
  @Prop()
  value: number;
  @Prop()
  year: number;
}
