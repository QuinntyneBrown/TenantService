/* tslint:disable */
import { TenantDto } from './tenant-dto';
export interface CreateTenantResponse {
  tenant?: TenantDto;
  validationErrors?: Array<string>;
}
