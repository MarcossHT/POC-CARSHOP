import { ICarShopvehicleRepository } from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import { GetAllVehiclesUsecase } from '@core/use-cases/get-all-vehicles.usecase';
import { InternalServerErrorException } from '@nestjs/common';
import { carShopvehicleRepositoryStub } from '@test/mocks/repositories/car-shop-vehicle.repositoy.mock';

type SutTypes = {
  sut: GetAllVehiclesUsecase;
  carShopvehicleRepositoryStub: ICarShopvehicleRepository;
};

const makeSut = (): SutTypes => {
  const sut = new GetAllVehiclesUsecase(carShopvehicleRepositoryStub);

  return {
    sut,
    carShopvehicleRepositoryStub,
  };
};

describe('GetAllVehiclesUsecase UseCase', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call getAllVehicles', async () => {
    const { sut, carShopvehicleRepositoryStub } = makeSut();

    const getAllVehiclesSpy = jest.spyOn(
      carShopvehicleRepositoryStub,
      'getAllVehicles',
    );

    await sut.execute();

    expect(getAllVehiclesSpy).toBeCalledTimes(1);
  });

  it('should throw if getAllVehicles throws', async () => {
    const { sut, carShopvehicleRepositoryStub } = makeSut();

    jest
      .spyOn(carShopvehicleRepositoryStub, 'getAllVehicles')
      .mockRejectedValueOnce(new InternalServerErrorException());

    const response = sut.execute();

    await expect(response).rejects.toThrowError(
      new InternalServerErrorException(),
    );
  });
});
