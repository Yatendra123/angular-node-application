import { Component, OnInit } from '@angular/core';

import { StudentDataService } from '../services/student-data.service';

@Component({
  selector: 'app-add-data',
  templateUrl: './add-data.component.html',
  styleUrls: ['./add-data.component.css']
})
export class AddDataComponent implements OnInit {

  constructor(private studentRecord:StudentDataService) { }

  ngOnInit(): void {
  }

  data:any;
  studentdbo(item:any){
     this.data= this.studentRecord.saveStudent(item);
  }
}
