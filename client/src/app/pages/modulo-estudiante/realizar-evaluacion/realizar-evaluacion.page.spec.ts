import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealizarEvaluacionPage } from './realizar-evaluacion.page';

describe('RealizarEvaluacionPage', () => {
  let component: RealizarEvaluacionPage;
  let fixture: ComponentFixture<RealizarEvaluacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarEvaluacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealizarEvaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
