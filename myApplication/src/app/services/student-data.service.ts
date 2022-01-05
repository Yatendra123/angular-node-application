import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  url = 'http://localhost:3000/studentdetail';

  public detail:any;

  constructor(private http:HttpClient) { }
  studentDetails(){
    return this.http.get(this.url);
  }

  editDetails(id:number | string | null){
    return this.http.get('http://localhost:3000/edit/'+id);
  }

  saveStudent(data:any){
    
    return this.http.post(this.url,data).subscribe((result)=>{
      console.warn(result);

    });
  }

  updateRecord(item:any){
     return this.http.post('http://localhost:3000/update',item).subscribe((reslt)=>{
      console.log(reslt);
    });
  }

  deleteDetail(id:number | string | null){
    return this.http.get('http://localhost:3000/delete/'+id);
  }

  searchRecord(item:any){
    console.log('go for execution item:'+item.rollno);
    return this.http.get('http://localhost:3000/search/'+item.rollno);
 }

  getDetail(){
    console.log(this.detail);
      return this.detail;
  }
}
