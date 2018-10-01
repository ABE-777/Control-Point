import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FlightsService } from '../flights.service';
import { FlightModel } from '../../../models/http-models/class-room-flights-and-settings.model';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-flight-selector',
  templateUrl: './flight-selector.component.html'
})
export class FlightSelectorComponent implements OnInit {
  _activeFlight: FlightModel;
  @Input() flights: FlightModel[];
  @Input()
  set activeFlight(activeFlight: FlightModel) {
    this._activeFlight = activeFlight;
    //this.setActiveFlight(this._activeFlight);
  };
  @Output() changeActiveFlight: EventEmitter<FlightModel> = new EventEmitter();

  constructor(private flightsService: FlightsService, private loaderService: LoaderService) { }

  ngOnInit() {
  }

  setActiveFlight(flight: FlightModel) {
    this.loaderService.displayMini(true);
    this.changeActiveFlight.emit(flight);
  }

}
