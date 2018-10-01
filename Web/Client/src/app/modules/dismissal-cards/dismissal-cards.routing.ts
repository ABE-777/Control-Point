import { Routes, RouterModule } from '@angular/router';
import { DismissalCardsComponent } from './dismissal-cards.component';
import { AuthGuard } from '../../navigation-guards/auth.guard';
import { CreateEditDismissalCardComponent } from './create-edit-dismissal-card/create-edit-dismissal-card.component';
import { ListDismissalCardComponent } from './list-dismissal-card/list-dismissal-card.component';
import { Roles } from '../../models/roles.enum';

const routes: Routes = [
  {
    path: 'dismissal-cards',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'list',
        canActivate: [AuthGuard],
        data: {
          expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
        }
      },
      {
        path: 'list',
        component: ListDismissalCardComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRoles: [Roles.schoolAdmin, Roles.superAdmin]
        }
      },
      {
        path: 'create',
        component: CreateEditDismissalCardComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRoles: [Roles.schoolAdmin, Roles.parent, Roles.superAdmin]
        }
      },
      {
        path: 'edit/:id',
        component: CreateEditDismissalCardComponent,
        canActivate: [AuthGuard],
        data: {
          expectedRoles: [Roles.schoolAdmin, Roles.parent, Roles.superAdmin]
        }
      }
    ]
  },
];

export const DismissalCardsRoutes = RouterModule.forChild(routes);
