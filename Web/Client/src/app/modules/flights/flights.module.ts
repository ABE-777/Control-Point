import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightsComponent } from './flights.component';
import { FlightsRoutes } from './flights.routing';
import { FlightSelectorComponent } from './flight-selector/flight-selector.component';
import { ShareModuleModule } from '../share-module/share-module.module';
import { LaneSelectorComponent } from './lane-selector/lane-selector.component';
import { InputSwitchModule, DropdownModule } from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import { FlightTablesComponent } from './flight-tables/flight-tables.component';
import { TableModule } from 'primeng/table';
import { FlightsService } from './flights.service';
import { FlightTeacherService } from '../../services/flight-teachers.service';
import { StudentsService } from '../../services/students.service';

@NgModule({
  imports: [
    CommonModule,
    FlightsRoutes,
    ShareModuleModule,
    TableModule,
    FormsModule,
    InputSwitchModule,
    DropdownModule
  ],
  declarations: [
    FlightsComponent,
    FlightSelectorComponent,
    LaneSelectorComponent,
    FlightTablesComponent
  ],
  providers: [
    FlightsService,
    FlightTeacherService,
    StudentsService
  ]
})
export class FlightsModule { }
