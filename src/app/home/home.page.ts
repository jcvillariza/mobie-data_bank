import { Component, OnInit } from '@angular/core';
import { Property } from '@models/property/property';
import { PropertyService } from '@services/property/property.service';
import { LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DatabaseService } from '@services/database/database.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  providers: [PropertyService]
})
export class HomePage implements OnInit {

  property: Property;

  private dbSubscription: Subscription;

  constructor(private _dataService: PropertyService, 
    private _dbService: DatabaseService,
    private loader: LoadingController,
    private router: Router) {}

  ngOnInit () {
    this.dbSubscription = this._dbService.dbStatus()
      .subscribe(status => {
        if (status) {
          this.getPropertyData();
        }
      });
  }

  ngOnDestroy() {
    this.dbSubscription.unsubscribe();
  }

  private async getPropertyData() {
    const loading = await this.loader.create({
      message: 'Loading...'
    });
    await loading.present();
    await this._dataService.getPropertyData();

    loading.dismiss();
    // await this._dataService.getPropertyData()
    //   .then(data => {
    //     loading.dismiss();
    //   }, error => {
    //     loading.dismiss();
    //     this.router.navigate(['property-create']);
    //   });
  }

}
