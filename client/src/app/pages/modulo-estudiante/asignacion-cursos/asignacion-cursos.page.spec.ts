import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsignacionCursosPage } from './asignacion-cursos.page';

describe('AsignacionCursosPage', () => {
  let component: AsignacionCursosPage;
  let fixture: ComponentFixture<AsignacionCursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignacionCursosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsignacionCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
