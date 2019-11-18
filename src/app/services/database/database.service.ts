import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SQLitePorter } from '@ionic-native/sqlite-porter/ngx';
import { HttpClient } from '@angular/common/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  database: SQLiteObject;
  private dbReady: Subject<boolean> = new Subject<boolean>();

  constructor(private plt: Platform, private sqlitePorter: SQLitePorter, private sqlite: SQLite, private http: HttpClient) {
    this.plt.ready()
      .then(() => {
        this.sqlite.create({name: 'mobile-dev.db',
                            location: 'default'})
          .then((db: SQLiteObject) => {
            this.database = db;
            this.seedDatabase();
          });
      });
   }

   private seedDatabase() {
     this.http.get('assets/migration/seed.sql', {responseType: 'text'})
      .subscribe(sql => {
        this.sqlitePorter.importSqlToDb(this.database, sql)
          .then(() => {
            this.dbReady.next(true);
          }, error => {
            e => console.error(e);
          });
      });
   }

   dbStatus(): Observable<boolean> {
    return this.dbReady.asObservable();
   }
}
