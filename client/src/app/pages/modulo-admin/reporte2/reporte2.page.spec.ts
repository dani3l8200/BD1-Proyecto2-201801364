import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reporte2Page } from './reporte2.page';

describe('Reporte2Page', () => {
  let component: Reporte2Page;
  let fixture: ComponentFixture<Reporte2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reporte2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reporte2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
