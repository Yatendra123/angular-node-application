import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentDataService } from '../services/student-data.service';


@Component({
  selector: 'app-edit-data',
  templateUrl: './edit-data.component.html',
  styleUrls: ['./edit-data.component.css']
})
export class EditDataComponent implements OnInit {

  detail: any;

  constructor(private route: ActivatedRoute, private editStudent: StudentDataService) {
    console.log('data id is : ' + this.route.snapshot.paramMap.get('id'));
    var id: string | null = null;
    id = this.route.snapshot.paramMap.get('id');

    editStudent.editDetails(id).subscribe((data) => {
      console.log(data);
      this.detail = data;
      console.log(this.detail)
    });
  }

updateCheck:any;
  updateStudentDetail(item:any){
    this.updateCheck= this.editStudent.updateRecord(item); 
  }
  ngOnInit() {

  }

}
