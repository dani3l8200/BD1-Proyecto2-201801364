import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta17Page } from './consulta17.page';

describe('Consulta17Page', () => {
  let component: Consulta17Page;
  let fixture: ComponentFixture<Consulta17Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta17Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta17Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
