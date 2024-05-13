import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentService } from './services/student.service';
import { LectureService } from './services/lecture.service';
import { Student } from './models/student-model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'prueba-front';

  studentList: Student[] = []

  constructor(
    private studentService: StudentService,
    private lectureService: LectureService,
  ) {}

  ngOnInit() {
    this.studentService
      .getList()
      .subscribe({
        next: (result: any) => {
          this.studentList = result.data;
          console.log(this.studentList);
        },
        error: err => console.log(err),
      })
  }

  onSave() {
    this.studentService
    .saveStudent({
      givenName: 'Adán',
      surname: 'Rivera',
      email: 'adri@gmail.com',
      phoneNumber: '3111215644'
    })
    .subscribe({
      next: res => {
        console.log(res);
      },
      error: err => console.log(err),
    })
  }
}
