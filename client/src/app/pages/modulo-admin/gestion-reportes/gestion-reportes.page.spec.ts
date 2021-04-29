import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionReportesPage } from './gestion-reportes.page';

describe('GestionReportesPage', () => {
  let component: GestionReportesPage;
  let fixture: ComponentFixture<GestionReportesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionReportesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionReportesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
