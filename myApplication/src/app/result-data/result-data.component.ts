import { Component, OnInit } from '@angular/core';
import { StudentDataService } from '../services/student-data.service';


@Component({
  selector: 'app-result-data',
  templateUrl: './result-data.component.html',
  styleUrls: ['./result-data.component.css']
})
export class ResultDataComponent implements OnInit {

result:any; 
  constructor(private searchdata:StudentDataService) {

   }

  ngOnInit(): void {
  }

  search(data:any){
    console.log('data in rolllno : '+data.rollno);
  this.result= this.searchdata.searchRecord(data).subscribe((item)=>{
    this.result = item;
    console.warn(this.result);
  });
    
  }

}
