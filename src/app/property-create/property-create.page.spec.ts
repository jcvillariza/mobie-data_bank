import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PropertyCreatePage } from './property-create.page';

describe('PropertyCreatePage', () => {
  let component: PropertyCreatePage;
  let fixture: ComponentFixture<PropertyCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropertyCreatePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PropertyCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
