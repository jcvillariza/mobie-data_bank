import { Injectable } from '@angular/core';
import { Property } from '@models/property/property';
import { DatabaseService } from '@services/database/database.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  constructor(private _dbService: DatabaseService) { }

  getPropertyData() {
    this._dbService.database.executeSql('SELECT * FROM Property')
      .then(data => {
        let property: Property;

        if (data && data.rows.length > 0) {
          console.log(data.rows[0]);
        }
      });
  }
}
