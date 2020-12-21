import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PtwoPage } from './ptwo.page';

describe('PtwoPage', () => {
  let component: PtwoPage;
  let fixture: ComponentFixture<PtwoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PtwoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PtwoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
