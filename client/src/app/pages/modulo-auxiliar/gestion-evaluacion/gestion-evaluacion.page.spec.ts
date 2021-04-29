import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionEvaluacionPage } from './gestion-evaluacion.page';

describe('GestionEvaluacionPage', () => {
  let component: GestionEvaluacionPage;
  let fixture: ComponentFixture<GestionEvaluacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEvaluacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionEvaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
