import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionAuxiliarPage } from './gestion-auxiliar.page';

describe('GestionAuxiliarPage', () => {
  let component: GestionAuxiliarPage;
  let fixture: ComponentFixture<GestionAuxiliarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAuxiliarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAuxiliarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
