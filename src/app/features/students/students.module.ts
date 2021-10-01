import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentListComponent } from './student-list/student-list.component';


@NgModule({
  declarations: [
    StudentEditComponent,
    StudentNewComponent,
    StudentListComponent
  ],
  imports: [
    CommonModule,
    StudentsRoutingModule
  ]
})
export class StudentsModule { }
