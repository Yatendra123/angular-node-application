import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { StudentDataService } from '../services/student-data.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  students:any;
  constructor(private studentData:StudentDataService) {
    
    studentData.studentDetails().subscribe((data)=>{
    this.students = data;
    })
  
  }

  loginForm = new FormGroup({

  });

  ngOnInit(){

  }

}
