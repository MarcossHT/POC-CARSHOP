import { ICarShopvehicleRepository } from '@core/abstractions/repositories/car-shop-vehicle.reposity.interface';
import {
  SaveVehicleUsecaseInput,
  SaveVehicleUsecaseOutput,
} from '@core/abstractions/use-cases/save-vehicle.usecase.interface';
import { IUuidUtils } from '@core/abstractions/utils/uuid.utils.interface';
import { SaveVehicleUsecase } from '@core/use-cases/save-vehicle.usecase';
import { InternalServerErrorException } from '@nestjs/common';
import { uuidUtilsStub } from '@test/mocks/infra/data/utils/utils.mock';
import { carShopvehicleRepositoryStub } from '@test/mocks/repositories/car-shop-vehicle.repositoy.mock';

type SutTypes = {
  sut: SaveVehicleUsecase;
  carShopvehicleRepositoryStub: ICarShopvehicleRepository;
  uuidUtilsStub: IUuidUtils;
};

const makeSut = (): SutTypes => {
  const sut = new SaveVehicleUsecase(
    carShopvehicleRepositoryStub,
    uuidUtilsStub,
  );

  return {
    sut,
    carShopvehicleRepositoryStub,
    uuidUtilsStub,
  };
};

const makeValidInput = (): SaveVehicleUsecaseInput => ({
  type: 'car',
  auction: false,
  salvage: false,
  vehicle: {
    brand: 'BMW',
    model: '320i',
    value: 60000,
    year: 2011,
  },
});

const makeValidOutput = (): SaveVehicleUsecaseOutput => ({
  idVehicle: 'valid-uuid',
  message: 'Vehicle created successfully',
});

describe('SaveVehicleUsecase UseCase', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should call build with correct values', async () => {
    const { sut, carShopvehicleRepositoryStub } = makeSut();

    const buildSpy = jest
      .spyOn(carShopvehicleRepositoryStub, 'build')
      .mockReturnValue(makeValidOutput() as never);

    const input = makeValidInput();
    await sut.execute(input);

    expect(buildSpy).toBeCalledTimes(1);
    expect(buildSpy).toBeCalledWith({
      idVehicle: 'valid-uuid',
      type: input.type,
      auction: input.auction,
      vehicle: input.vehicle,
      status: 'AVAILABLE',
      salvage: input.salvage,
    });
  });

  it('should throw if build throws', async () => {
    const { sut, carShopvehicleRepositoryStub } = makeSut();

    jest
      .spyOn(carShopvehicleRepositoryStub, 'build')
      .mockRejectedValueOnce(new InternalServerErrorException());

    const input = makeValidInput();
    const response = sut.execute(input);

    await expect(response).rejects.toThrowError(
      new InternalServerErrorException(),
    );
  });
});
