export class FlightModel {
  flightId: number;
  status: string;
  flightNumber: number;
}

export class ClassRoomFlightsAndSettingsModel {
  flights: FlightModel[];
  teacherId: number;
  defaultLaneColor: string;
  isCarColumnVisible: boolean;
  isGradeColumnVisible: boolean;
  isHallwayColumnVisible: boolean;
  closedFlightIntoArchive: string;
}
