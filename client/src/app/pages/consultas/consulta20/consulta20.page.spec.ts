import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta20Page } from './consulta20.page';

describe('Consulta20Page', () => {
  let component: Consulta20Page;
  let fixture: ComponentFixture<Consulta20Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta20Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta20Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
