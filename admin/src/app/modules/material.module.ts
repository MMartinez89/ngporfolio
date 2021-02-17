
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';


const modules = [
  MatButtonModule,
  MatTableModule,
  MatToolbarModule,
  MatDialogModule,
  MatIconModule,
  MatInputModule,
  MatSlideToggleModule,
  MatSelectModule,
  NgxMatSelectSearchModule,
];
@NgModule({
  imports: modules,
  exports: modules,
  providers: [],
})
export class MaterialModule {}