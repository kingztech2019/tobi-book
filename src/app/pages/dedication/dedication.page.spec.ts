import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DedicationPage } from './dedication.page';

describe('DedicationPage', () => {
  let component: DedicationPage;
  let fixture: ComponentFixture<DedicationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DedicationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DedicationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
