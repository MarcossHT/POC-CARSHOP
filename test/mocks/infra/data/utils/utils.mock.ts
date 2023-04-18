import { IUuidUtils } from '@core/abstractions/utils/uuid.utils.interface';
import { mock, MockProxy } from 'jest-mock-extended';

export const uuidUtilsStub: MockProxy<IUuidUtils> = mock<IUuidUtils>({
  buildUUID: () => 'valid-uuid',
});
