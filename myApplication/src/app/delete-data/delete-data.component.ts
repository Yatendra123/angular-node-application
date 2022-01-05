import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {StudentDataService} from '../services/student-data.service';
@Component({
  selector: 'app-delete-data',
  templateUrl: './delete-data.component.html',
  styleUrls: ['./delete-data.component.css']
})
export class DeleteDataComponent implements OnInit {

  constructor(private route:ActivatedRoute , private deleteData:StudentDataService) { 
    console.log('deleted data id is : ' + this.route.snapshot.paramMap.get('id'));
    var id: string | null = null;
    id = this.route.snapshot.paramMap.get('id');
    deleteData.deleteDetail(id).subscribe(()=>{
        console.log('ok done');
    });
  }

  ngOnInit(): void {
  }

}
