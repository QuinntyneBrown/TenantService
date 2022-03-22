/* tslint:disable */
import { TenantDto } from './tenant-dto';
export interface GetTenantByIdResponse {
  tenant?: TenantDto;
  validationErrors?: Array<string>;
}
