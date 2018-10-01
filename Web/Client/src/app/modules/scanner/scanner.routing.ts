import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../../navigation-guards/auth.guard';
import { ScannerComponent } from './scanner.component';
import { ScannedStudentsListComponent } from './scanned-students-list/scanned-students-list.component';
import { Roles } from '../../models/roles.enum';

const routes: Routes = [
  {
    path: 'scanner',
    component: ScannerComponent,
    canActivate: [
      AuthGuard
    ],
    data: {
      expectedRoles: [Roles.scanner]
    }
  },
];

export const ScannerRoutes = RouterModule.forChild(routes);
