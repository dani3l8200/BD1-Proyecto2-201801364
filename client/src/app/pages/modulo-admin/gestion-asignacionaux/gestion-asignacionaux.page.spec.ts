import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionAsignacionauxPage } from './gestion-asignacionaux.page';

describe('GestionAsignacionauxPage', () => {
  let component: GestionAsignacionauxPage;
  let fixture: ComponentFixture<GestionAsignacionauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAsignacionauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAsignacionauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
