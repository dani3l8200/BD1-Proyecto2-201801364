import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualizarAsignacionPage } from './visualizar-asignacion.page';

describe('VisualizarAsignacionPage', () => {
  let component: VisualizarAsignacionPage;
  let fixture: ComponentFixture<VisualizarAsignacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarAsignacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarAsignacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
