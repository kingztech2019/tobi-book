import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AckPage } from './ack.page';

describe('AckPage', () => {
  let component: AckPage;
  let fixture: ComponentFixture<AckPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AckPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AckPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
