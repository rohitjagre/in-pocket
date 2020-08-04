import { Injectable } from '@angular/core';
import { BaseModel } from './base-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/**
 * Abstarct generic class for http requests
 *
 * @export
 * @abstract
 * @class AbstractGenericService
 * @template T
 */
@Injectable({
  providedIn: 'root'
})
export abstract class AbstractGenericService<T extends BaseModel> {
  private baseURL = 'http://localhost/3309/';
  constructor(protected httpClient?: HttpClient, protected subURL?: keyof T)
  {
  }
  /**
   * For http get request
   *
   * @protected
   * @returns {Observable<any>}
   * @memberof AbstractGenericService
   */
  protected get(): Observable<any>
  {
    return this.httpClient.get(`${this.baseURL}${this.subURL}`);
  }
  /**
   * For http post request
   *
   * @protected
   * @param {({ email: string, password: string } | any)} body
   * @returns {Observable<any>}
   * @memberof AbstractGenericService
   */
  protected post(body: object): Observable<any>
  {
    return this.httpClient.post(`${this.baseURL}${this.subURL}`, body);
  }
}
