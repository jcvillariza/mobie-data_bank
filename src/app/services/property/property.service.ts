import { Injectable } from '@angular/core';
import { Property } from '@models/property/property';
import { ApiService } from '@services/api/api.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private _apiService: ApiService) { }

  getPropertyData() : Promise<Property> {
    return this._apiService.get(`property/data`)
  }
}
