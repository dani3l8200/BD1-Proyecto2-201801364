import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TablaReporte2Page } from './tabla-reporte2.page';

describe('TablaReporte2Page', () => {
  let component: TablaReporte2Page;
  let fixture: ComponentFixture<TablaReporte2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaReporte2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TablaReporte2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
