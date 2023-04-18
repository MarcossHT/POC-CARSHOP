export type VehicleStatus = 'AVAILABLE' | 'SOLD';

export class VehicleEntity {
  type: string;
  auction: boolean;
  salvage: boolean;
  vehicle: {
    brand: string;
    model: string;
    value: number;
    year: number;
  };
  status: VehicleStatus;
}
