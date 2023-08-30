import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Items } from './item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  private apiServerUrl = "https://db.ezobooks.in/kappa/image/task";

  constructor(private httpClient: HttpClient) { }

  public getAllItems(): Observable<Items> {
    return this.httpClient.get<Items>(this.apiServerUrl);
  }
}
