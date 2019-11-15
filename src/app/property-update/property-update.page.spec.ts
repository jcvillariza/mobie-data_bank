import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertyUpdatePage } from './property-update.page';

describe('PropertyUpdatePage', () => {
  let component: PropertyUpdatePage;
  let fixture: ComponentFixture<PropertyUpdatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyUpdatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyUpdatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
