import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {NgxSpinnerModule} from "ngx-spinner";
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTooltipModule} from '@angular/material/tooltip';
import {QRCodeModule} from 'angularx-qrcode';
import { LazyLoadImageModule } from 'ng-lazyload-image';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxSpinnerModule,
    MatSidenavModule,
    QRCodeModule,
    LazyLoadImageModule,
    MatTooltipModule
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDatepickerModule,
    MatChipsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    NgxSpinnerModule,
    MatSidenavModule,
    QRCodeModule,
    LazyLoadImageModule,
    MatTooltipModule
  ]
})
export class SharedModule { }
