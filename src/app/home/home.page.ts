import { Component, OnInit } from '@angular/core';
import { Property } from '@models/property/property';
import { PropertyService } from '@services/property/property.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [PropertyService]
})
export class HomePage implements OnInit {

  property: Property;

  constructor(private _dataService: PropertyService, private loader: LoadingController,
    private router: Router) {}

  ngOnInit () {
    this.getPropertyData();
  }

  private async getPropertyData() {
    const loading = await this.loader.create({
      message: 'Loading...'
    });
    await loading.present();
    await this._dataService.getPropertyData()
      .then(data => {
        loading.dismiss();
      }, error => {
        loading.dismiss();
        this.router.navigate(['property-create']);
      });
  }

}
