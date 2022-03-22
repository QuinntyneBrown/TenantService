/* tslint:disable */
import { TenantDto } from './tenant-dto';
export interface RemoveTenantResponse {
  tenant?: TenantDto;
  validationErrors?: Array<string>;
}
