import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BuscarEvaluacionPage } from './buscar-evaluacion.page';

describe('BuscarEvaluacionPage', () => {
  let component: BuscarEvaluacionPage;
  let fixture: ComponentFixture<BuscarEvaluacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarEvaluacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BuscarEvaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
