/* tslint:disable */
import { TenantDto } from './tenant-dto';
export interface GetTenantsPageResponse {
  entities?: Array<TenantDto>;
  length?: number;
  validationErrors?: Array<string>;
}
