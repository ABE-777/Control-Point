import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LaneForFlightModel } from '../../../models/http-models/lane-for-flight.model';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-lane-selector',
  templateUrl: './lane-selector.component.html'
})
export class LaneSelectorComponent implements OnInit {
  _lanes: LaneForFlightModel[];
  _activeLane: LaneForFlightModel;
  _nextActiveLane: LaneForFlightModel;
  
  @Input() isLandscape: boolean;
  @Input()
  set lanes(lanes: LaneForFlightModel[]) {
    this._lanes = lanes;
  };

  @Input()
  set activeLane(activeLane: LaneForFlightModel) {
    this._activeLane = activeLane;    
  };

  @Input()
  set nextActiveLane(nextActiveLane: LaneForFlightModel) {
    this._nextActiveLane = nextActiveLane;
  };

  @Output() changeActiveLane: EventEmitter<LaneForFlightModel> = new EventEmitter();

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
  }

  setActiveLane(lane: LaneForFlightModel) {
    this.loaderService.displayMini(true);
    this.changeActiveLane.emit(lane);    
  }

}
