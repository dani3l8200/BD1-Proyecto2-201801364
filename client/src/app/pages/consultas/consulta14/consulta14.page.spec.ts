import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta14Page } from './consulta14.page';

describe('Consulta14Page', () => {
  let component: Consulta14Page;
  let fixture: ComponentFixture<Consulta14Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta14Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta14Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
