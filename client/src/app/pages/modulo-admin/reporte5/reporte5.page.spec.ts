import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reporte5Page } from './reporte5.page';

describe('Reporte5Page', () => {
  let component: Reporte5Page;
  let fixture: ComponentFixture<Reporte5Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reporte5Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reporte5Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
