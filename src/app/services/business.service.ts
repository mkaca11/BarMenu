import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {BusinessData} from "../interfaces/business-data";

@Injectable({
  providedIn: 'root'
})
export class BusinessService {
  baseUrl = `${environment.baseUrl}`

  constructor(private httpClient: HttpClient) {
  }

  getBusinessData(): Observable<BusinessData> {
    return this.httpClient.get<BusinessData>(this.baseUrl)
  }
}
