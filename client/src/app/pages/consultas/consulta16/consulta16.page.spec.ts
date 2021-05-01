import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta16Page } from './consulta16.page';

describe('Consulta16Page', () => {
  let component: Consulta16Page;
  let fixture: ComponentFixture<Consulta16Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta16Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta16Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
