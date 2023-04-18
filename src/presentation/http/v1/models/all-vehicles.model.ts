import { vehicleData } from '@core/abstractions/use-cases/get-all-vehicles.usecase.interface';

export class AllVehiclesModelOutput {
  vehicles: Array<vehicleData>;
}
