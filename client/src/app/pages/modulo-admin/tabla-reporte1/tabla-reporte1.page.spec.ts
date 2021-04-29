import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaReporte1Page } from './tabla-reporte1.page';

describe('TablaReporte1Page', () => {
  let component: TablaReporte1Page;
  let fixture: ComponentFixture<TablaReporte1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReporte1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaReporte1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
