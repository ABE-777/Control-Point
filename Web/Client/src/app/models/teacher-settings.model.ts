import { Lane } from '../models/lane.model';

export class TeacherSettings {
  teacherId: number;
  laneId: number;
  isCarColumnVisible: boolean;
  isGradeColumnVisible: boolean;
  isHallwayColumnVisible: boolean;
  lanes: Lane[];
}
