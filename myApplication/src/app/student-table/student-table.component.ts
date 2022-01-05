import { Component, OnInit } from '@angular/core';
import {StudentDataService} from '../services/student-data.service';
@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent implements OnInit {
 studentsData:any;
 count=0;
  constructor(private studentData:StudentDataService) {
    studentData.studentDetails().subscribe((data)=>{
      this.studentsData = data;
    });
   }

  ngOnInit(): void {
  }

}
