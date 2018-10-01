import { Lane } from "./lane.model";
import { ScannerUser } from "./scanner-user.model";

export class SchoolSettings {
  countOfLanes: number;
  lanes: Lane[];
  carsPerLane: number;
  laneLogisticTypeId: number;
  cardPrintingTypeId: number;
  archiveTimeTypeId: number;
  archiveTimeTypes: ArchiveTimeType[];
  cardPrintingTypes: CardPrintingType[];
  allowPrintingAtHome: boolean;
  instructions: string;
  laneScanningTypes: LaneScanningType[];
  scannerUsers: ScannerUser[];
  newScannerUsers: NewScannerUser[];
}

class LaneScanningType {
  id: number;
  name: string;
}

class ArchiveTimeType {
  id: number;
  name: string;
}

class CardPrintingType {
  id: number;
  name: string;
}

export class NewScannerUser {
  name: string;
  email: string;
  laneColor?: string;
}
