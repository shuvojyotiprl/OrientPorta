import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRadioModule} from '@angular/material/radio';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatBadgeModule} from '@angular/material/badge';
import {MatDividerModule} from '@angular/material/divider';


import {
  MatCardModule
} from '@angular/material/card';

import {
  MatInputModule
} from '@angular/material/input';

const MaterialComponents = [MatButtonModule,MatToolbarModule,
  MatIconModule,MatListModule,MatSidenavModule,MatTabsModule,MatGridListModule,MatCardModule,
  MatInputModule,MatRadioModule,MatExpansionModule,MatSlideToggleModule,MatBadgeModule,MatDividerModule
]

@NgModule({
  imports: [
    MaterialComponents
  ],
  exports: [
    MaterialComponents
    
  ]
})
export class MaterialModule { }
