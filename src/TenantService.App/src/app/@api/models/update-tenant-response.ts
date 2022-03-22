/* tslint:disable */
import { TenantDto } from './tenant-dto';
export interface UpdateTenantResponse {
  tenant?: TenantDto;
  validationErrors?: Array<string>;
}
