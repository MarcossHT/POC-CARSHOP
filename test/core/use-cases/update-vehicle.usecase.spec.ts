import { ICarShopvehicleRepository } from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import {
  UpdateVehicleInput,
  UpdateVehicleOutput,
} from '@core/abstractions/use-cases/update-vehicle.usecase.inteface';
import { UpdateVehicleUsecase } from '@core/use-cases/update-vehicle.usecase';
import { InternalServerErrorException } from '@nestjs/common';
import { carShopvehicleRepositoryStub } from '@test/mocks/repositories/car-shop-vehicle.repositoy.mock';

type SutTypes = {
  sut: UpdateVehicleUsecase;
  carShopvehicleRepositoryStub: ICarShopvehicleRepository;
};

const makeSut = (): SutTypes => {
  const sut = new UpdateVehicleUsecase(carShopvehicleRepositoryStub);

  return {
    sut,
    carShopvehicleRepositoryStub,
  };
};

const makeValidInput = (): UpdateVehicleInput => ({
  idVehicle: 'valid-idvehicle',
});

const makeValidOutput = (): UpdateVehicleOutput => ({
  idVehicle: 'valid-idvehicle',
  message:
    'Vehicle updated successfully, congratulations for your sell service!',
});

describe('UpdateVehicleUsecase Usecase', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('shoould call updateVehicle with correct values', async () => {
    const { sut, carShopvehicleRepositoryStub } = makeSut();

    const updateVehicleSpy = jest
      .spyOn(carShopvehicleRepositoryStub, 'updateVehicle')
      .mockResolvedValueOnce(makeValidOutput() as never);

    const input = makeValidInput();
    await sut.execute(input);

    expect(updateVehicleSpy).toBeCalledTimes(1);
    expect(updateVehicleSpy).toBeCalledWith(input);
  });

  it('should throw if updateVehicle throws', async () => {
    const { sut, carShopvehicleRepositoryStub } = makeSut();

    jest
      .spyOn(carShopvehicleRepositoryStub, 'updateVehicle')
      .mockRejectedValueOnce(new InternalServerErrorException());

    const input = makeValidInput();
    const response = sut.execute(input);

    await expect(response).rejects.toThrowError(
      new InternalServerErrorException(),
    );
  });
});
