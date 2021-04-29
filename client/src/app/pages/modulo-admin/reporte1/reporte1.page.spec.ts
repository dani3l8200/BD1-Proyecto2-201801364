import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Reporte1Page } from './reporte1.page';

describe('Reporte1Page', () => {
  let component: Reporte1Page;
  let fixture: ComponentFixture<Reporte1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reporte1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Reporte1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
