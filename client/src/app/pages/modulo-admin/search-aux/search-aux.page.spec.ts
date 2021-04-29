import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SearchAuxPage } from './search-aux.page';

describe('SearchAuxPage', () => {
  let component: SearchAuxPage;
  let fixture: ComponentFixture<SearchAuxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchAuxPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchAuxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
