import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NumericLiteral } from 'typescript';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-edit',
  templateUrl: './student-edit.component.html',
  styleUrls: ['./student-edit.component.css']
})
export class StudentEditComponent implements OnInit {

  id!: number;
  student?: Student;

  constructor(
    private studentService: StudentsService,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.ActivatedRoute.snapshot.params.id;
    this.searchStudent();
  }

  onUpdate() {
    this.studentService.update(this.id, this.student!);
    this.router.navigateByUrl("/students");
  }

  private searchStudent() {
    this.student = this.studentService.findById(this.id);
    this.student = JSON.parse(JSON.stringify(this.student));
  }

}
