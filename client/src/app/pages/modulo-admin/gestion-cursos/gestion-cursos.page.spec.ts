import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionCursosPage } from './gestion-cursos.page';

describe('GestionCursosPage', () => {
  let component: GestionCursosPage;
  let fixture: ComponentFixture<GestionCursosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCursosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionCursosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
