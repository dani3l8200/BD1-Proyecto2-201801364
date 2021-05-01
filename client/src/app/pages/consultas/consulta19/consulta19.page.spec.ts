import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta19Page } from './consulta19.page';

describe('Consulta19Page', () => {
  let component: Consulta19Page;
  let fixture: ComponentFixture<Consulta19Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta19Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta19Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
