import { ServiceProviderList } from './../models/ServiceProviderList';
import { ServiceType } from './../models/ServiceType';
import { ServiceProvider } from './../models/ServiceProvider';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Service } from '../models/Service';

@Injectable({
  providedIn: 'root',
})
export class ReachmeService {
  constructor(private http: HttpClient) {}

  getServices(): Observable<ServiceType> {
    return this.http.get<ServiceType>(
      'http://reachmeservice.us-south.cf.appdomain.cloud/service'
    );
  }

  getServiceProviders(): Observable<ServiceProviderList> {
    return this.http.get<ServiceProviderList>(
      'http://reachmeservice.us-south.cf.appdomain.cloud/serviceprovider'
    );
  }
}
