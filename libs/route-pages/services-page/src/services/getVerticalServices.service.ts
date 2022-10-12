import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IVerticalServicesCard } from '../components/vertical-services-card/vertical-services-card.component';

@Injectable({ providedIn: 'platform' })
export class GetVerticalServices {

  constructor(
    private http: HttpClient
  ) {

  }

  getVerticalServices(): Observable<IVerticalServicesCard[]> {
    return this.http.get<IVerticalServicesCard[]>(`assets/vertical-services/vertical-services.json`);
  }

}