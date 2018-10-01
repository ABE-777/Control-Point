import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ScannerComponent } from './scanner.component';
import { ScannerRoutes } from './scanner.routing';
import { ScannedStudentsListComponent } from './scanned-students-list/scanned-students-list.component';
import { ScannerEntryComponent } from './scanner-entry/scanner-entry.component';
import { ScannerService } from './scanner.service';
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ScannerRoutes,
    DropdownModule
  ],
  declarations: [
    ScannerComponent,
    ScannedStudentsListComponent,
    ScannerEntryComponent
  ],
  providers: [
    ScannerService
  ]
})
export class ScannerModule { }
