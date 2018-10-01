import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DismissalCardsComponent } from './dismissal-cards.component';
import { FormsModule } from '@angular/forms';
import { CreateEditDismissalCardComponent } from './create-edit-dismissal-card/create-edit-dismissal-card.component';
import { DismissalCardsRoutes } from './dismissal-cards.routing';
import { ListDismissalCardComponent } from './list-dismissal-card/list-dismissal-card.component';
import { MultiSelectModule, CheckboxModule, DropdownModule } from 'primeng/primeng';
import { DxDataGridModule, DxDataGridComponent } from 'devextreme-angular';
import { ShareModuleModule } from '../share-module/share-module.module';
import { IsDriverExistDirective } from '../../directives/is-driver-exist.directive';
import { NgxBarcodeModule } from 'ngx-barcode';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DismissalCardsRoutes,
    MultiSelectModule,
    DxDataGridModule,
    CheckboxModule,
    ShareModuleModule,
    NgxBarcodeModule,
    DropdownModule
  ],
  declarations: [
    DismissalCardsComponent,
    CreateEditDismissalCardComponent,
    ListDismissalCardComponent,
    IsDriverExistDirective
  ]
})
export class DismissalCardsModule { }
