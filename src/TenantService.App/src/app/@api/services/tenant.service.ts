/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { GetTenantByIdResponse } from '../models/get-tenant-by-id-response';
import { RemoveTenantResponse } from '../models/remove-tenant-response';
import { GetTenantsResponse } from '../models/get-tenants-response';
import { CreateTenantResponse } from '../models/create-tenant-response';
import { CreateTenantRequest } from '../models/create-tenant-request';
import { UpdateTenantResponse } from '../models/update-tenant-response';
import { UpdateTenantRequest } from '../models/update-tenant-request';
import { GetTenantsPageResponse } from '../models/get-tenants-page-response';
@Injectable({
  providedIn: 'root',
})
class TenantService extends __BaseService {
  static readonly getTenantByIdPath = '/api/Tenant/{tenantId}';
  static readonly removeTenantPath = '/api/Tenant/{tenantId}';
  static readonly getTenantsPath = '/api/Tenant';
  static readonly createTenantPath = '/api/Tenant';
  static readonly updateTenantPath = '/api/Tenant';
  static readonly getTenantsPagePath = '/api/Tenant/page/{pageSize}/{index}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Get Tenant by id.
   *
   * Get Tenant by id.
   * @param tenantId undefined
   * @return Success
   */
  getTenantByIdResponse(tenantId: string): __Observable<__StrictHttpResponse<GetTenantByIdResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tenant/${encodeURIComponent(String(tenantId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetTenantByIdResponse>;
      })
    );
  }
  /**
   * Get Tenant by id.
   *
   * Get Tenant by id.
   * @param tenantId undefined
   * @return Success
   */
  getTenantById(tenantId: string): __Observable<GetTenantByIdResponse> {
    return this.getTenantByIdResponse(tenantId).pipe(
      __map(_r => _r.body as GetTenantByIdResponse)
    );
  }

  /**
   * Delete Tenant.
   *
   * Delete Tenant.
   * @param tenantId undefined
   * @return Success
   */
  removeTenantResponse(tenantId: string): __Observable<__StrictHttpResponse<RemoveTenantResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/Tenant/${encodeURIComponent(String(tenantId))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<RemoveTenantResponse>;
      })
    );
  }
  /**
   * Delete Tenant.
   *
   * Delete Tenant.
   * @param tenantId undefined
   * @return Success
   */
  removeTenant(tenantId: string): __Observable<RemoveTenantResponse> {
    return this.removeTenantResponse(tenantId).pipe(
      __map(_r => _r.body as RemoveTenantResponse)
    );
  }

  /**
   * Get Tenants.
   *
   * Get Tenants.
   * @return Success
   */
  getTenantsResponse(): __Observable<__StrictHttpResponse<GetTenantsResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tenant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetTenantsResponse>;
      })
    );
  }
  /**
   * Get Tenants.
   *
   * Get Tenants.
   * @return Success
   */
  getTenants(): __Observable<GetTenantsResponse> {
    return this.getTenantsResponse().pipe(
      __map(_r => _r.body as GetTenantsResponse)
    );
  }

  /**
   * Create Tenant.
   *
   * Create Tenant.
   * @param body undefined
   * @return Success
   */
  createTenantResponse(body?: CreateTenantRequest): __Observable<__StrictHttpResponse<CreateTenantResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/Tenant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<CreateTenantResponse>;
      })
    );
  }
  /**
   * Create Tenant.
   *
   * Create Tenant.
   * @param body undefined
   * @return Success
   */
  createTenant(body?: CreateTenantRequest): __Observable<CreateTenantResponse> {
    return this.createTenantResponse(body).pipe(
      __map(_r => _r.body as CreateTenantResponse)
    );
  }

  /**
   * Update Tenant.
   *
   * Update Tenant.
   * @param body undefined
   * @return Success
   */
  updateTenantResponse(body?: UpdateTenantRequest): __Observable<__StrictHttpResponse<UpdateTenantResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = body;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/Tenant`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<UpdateTenantResponse>;
      })
    );
  }
  /**
   * Update Tenant.
   *
   * Update Tenant.
   * @param body undefined
   * @return Success
   */
  updateTenant(body?: UpdateTenantRequest): __Observable<UpdateTenantResponse> {
    return this.updateTenantResponse(body).pipe(
      __map(_r => _r.body as UpdateTenantResponse)
    );
  }

  /**
   * Get Tenant Page.
   *
   * Get Tenant Page.
   * @param params The `TenantService.GetTenantsPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getTenantsPageResponse(params: TenantService.GetTenantsPageParams): __Observable<__StrictHttpResponse<GetTenantsPageResponse>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;


    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/Tenant/page/${encodeURIComponent(String(params.pageSize))}/${encodeURIComponent(String(params.index))}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<GetTenantsPageResponse>;
      })
    );
  }
  /**
   * Get Tenant Page.
   *
   * Get Tenant Page.
   * @param params The `TenantService.GetTenantsPageParams` containing the following parameters:
   *
   * - `pageSize`:
   *
   * - `index`:
   *
   * @return Success
   */
  getTenantsPage(params: TenantService.GetTenantsPageParams): __Observable<GetTenantsPageResponse> {
    return this.getTenantsPageResponse(params).pipe(
      __map(_r => _r.body as GetTenantsPageResponse)
    );
  }
}

module TenantService {

  /**
   * Parameters for getTenantsPage
   */
  export interface GetTenantsPageParams {
    pageSize: number;
    index: number;
  }
}

export { TenantService }
