import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchAuxPageRoutingModule } from './search-aux-routing.module';

import { SearchAuxPage } from './search-aux.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SearchAuxPageRoutingModule
  ],
  declarations: [SearchAuxPage]
})
export class SearchAuxPageModule {}
