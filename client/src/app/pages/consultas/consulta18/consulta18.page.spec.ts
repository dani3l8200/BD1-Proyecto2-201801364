import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta18Page } from './consulta18.page';

describe('Consulta18Page', () => {
  let component: Consulta18Page;
  let fixture: ComponentFixture<Consulta18Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta18Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta18Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
