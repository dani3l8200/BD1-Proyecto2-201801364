import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GestionAddauxPage } from './gestion-addaux.page';

describe('GestionAddauxPage', () => {
  let component: GestionAddauxPage;
  let fixture: ComponentFixture<GestionAddauxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionAddauxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GestionAddauxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
