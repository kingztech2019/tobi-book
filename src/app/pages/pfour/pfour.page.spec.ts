import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PfourPage } from './pfour.page';

describe('PfourPage', () => {
  let component: PfourPage;
  let fixture: ComponentFixture<PfourPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PfourPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PfourPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
