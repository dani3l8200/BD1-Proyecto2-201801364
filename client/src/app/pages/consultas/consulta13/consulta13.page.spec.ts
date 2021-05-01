import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta13Page } from './consulta13.page';

describe('Consulta13Page', () => {
  let component: Consulta13Page;
  let fixture: ComponentFixture<Consulta13Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta13Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta13Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
