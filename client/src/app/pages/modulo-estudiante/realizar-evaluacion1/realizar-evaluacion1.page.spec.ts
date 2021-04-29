import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RealizarEvaluacion1Page } from './realizar-evaluacion1.page';

describe('RealizarEvaluacion1Page', () => {
  let component: RealizarEvaluacion1Page;
  let fixture: ComponentFixture<RealizarEvaluacion1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealizarEvaluacion1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RealizarEvaluacion1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
