import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PthreePage } from './pthree.page';

describe('PthreePage', () => {
  let component: PthreePage;
  let fixture: ComponentFixture<PthreePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PthreePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PthreePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
