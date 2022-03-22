/* tslint:disable */
import { TenantDto } from './tenant-dto';
export interface GetTenantsResponse {
  tenants?: Array<TenantDto>;
  validationErrors?: Array<string>;
}
