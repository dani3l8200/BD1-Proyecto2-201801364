import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta15Page } from './consulta15.page';

describe('Consulta15Page', () => {
  let component: Consulta15Page;
  let fixture: ComponentFixture<Consulta15Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta15Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta15Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
