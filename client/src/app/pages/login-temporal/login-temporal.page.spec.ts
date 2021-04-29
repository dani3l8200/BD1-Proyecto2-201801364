import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginTemporalPage } from './login-temporal.page';

describe('LoginTemporalPage', () => {
  let component: LoginTemporalPage;
  let fixture: ComponentFixture<LoginTemporalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginTemporalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginTemporalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
