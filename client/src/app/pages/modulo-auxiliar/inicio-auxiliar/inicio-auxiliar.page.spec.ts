import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioAuxiliarPage } from './inicio-auxiliar.page';

describe('InicioAuxiliarPage', () => {
  let component: InicioAuxiliarPage;
  let fixture: ComponentFixture<InicioAuxiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAuxiliarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioAuxiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
