import { IUuidUtils } from '@core/abstractions/utils/uuid.utils.interface';
import { v4 } from 'uuid';

export class UuidUtils implements IUuidUtils {
  buildUUID(): string {
    return v4();
  }
}
