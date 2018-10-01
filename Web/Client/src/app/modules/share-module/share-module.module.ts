import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShareModuleComponent } from './share-module.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { PaginatorComponent } from './paginator/paginator.component';
import { WhiteSpaceValidator } from '../../directives/white-space-validation.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ShareModuleComponent,
    SearchBarComponent,
    PaginatorComponent,
    WhiteSpaceValidator
],
  exports: [ SearchBarComponent, PaginatorComponent, WhiteSpaceValidator ]
})
export class ShareModuleModule { }
