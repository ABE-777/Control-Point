import { StudentForParent } from "../student-for-parent.model";
import { DismissalCard } from "./dismissal-card.model";

export class ParentInfo {
  userId: number;
  instructionsChecked: boolean;
  isPrintingAtHome: boolean;
  instruction: string;
  dismissalCards: DismissalCard[];
  students: StudentForParent[];
}
