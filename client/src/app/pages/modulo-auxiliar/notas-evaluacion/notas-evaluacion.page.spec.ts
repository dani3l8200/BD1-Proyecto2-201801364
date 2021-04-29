import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NotasEvaluacionPage } from './notas-evaluacion.page';

describe('NotasEvaluacionPage', () => {
  let component: NotasEvaluacionPage;
  let fixture: ComponentFixture<NotasEvaluacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotasEvaluacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NotasEvaluacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
