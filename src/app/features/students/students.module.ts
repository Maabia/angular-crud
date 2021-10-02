import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentListComponent } from './student-list/student-list.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    StudentEditComponent,
    StudentNewComponent,
    StudentListComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    StudentsRoutingModule,
    FontAwesomeModule,
    SharedModule
  ]
})
export class StudentsModule { }
