import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AsignarCursosPage } from './asignar-cursos.page';

describe('AsignarCursosPage', () => {
  let component: AsignarCursosPage;
  let fixture: ComponentFixture<AsignarCursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsignarCursosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AsignarCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
