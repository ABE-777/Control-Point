import { Routes, RouterModule } from '@angular/router';
import { FlightsComponent } from './flights.component';
import { AuthGuard } from '../../navigation-guards/auth.guard';
import { Roles } from '../../models/roles.enum';

const routes: Routes = [
  {
    path: 'flights',
    component: FlightsComponent,
    canActivate: [AuthGuard],
    data: {
      expectedRoles: [Roles.schoolAdmin, Roles.classroomTeacher, Roles.dismissalTeacher, Roles.superAdmin]
    }
  },
];

export const FlightsRoutes = RouterModule.forChild(routes);
