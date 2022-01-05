import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDataComponent } from './add-data/add-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { HomeComponent } from './home/home.component';
import { ResultDataComponent } from './result-data/result-data.component';




import { StudentTableComponent } from './student-table/student-table.component';
import { UpdatedDataComponent } from './updated-data/updated-data.component';

const routes: Routes = [
{
  path:'teacher',
  component:StudentTableComponent
},
{
  path:'',
  component:HomeComponent
},
{
  path:'student',
  component:AddDataComponent
},
{
  path:'delete/:id',
  component:DeleteDataComponent
},
{
  path:'delete/:id/teacher',
  component:StudentTableComponent
},
{
  path:'updateData',
  component:UpdatedDataComponent
},
{
  path:'edit/:id',
  component:EditDataComponent
},
{
  path:'result',
  component:ResultDataComponent
},
{
  path:'student/teacher',
  component:StudentTableComponent
}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
