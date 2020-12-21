import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PonePage } from './pone.page';

describe('PonePage', () => {
  let component: PonePage;
  let fixture: ComponentFixture<PonePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PonePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PonePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
