import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Consulta12Page } from './consulta12.page';

describe('Consulta12Page', () => {
  let component: Consulta12Page;
  let fixture: ComponentFixture<Consulta12Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Consulta12Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Consulta12Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
