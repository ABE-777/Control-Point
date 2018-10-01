import { ScannedStudent } from "./scanned-student";

export class ScannerInitData {
  assignedLanes: AssignedLane[];
  scannedStudents: ScannedStudent[];
  scanningMode: string; // 'multiple' or 'single'
}

export class AssignedLane {
  id: number;
  name: string;
  color: string;
}
