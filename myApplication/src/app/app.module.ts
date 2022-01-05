import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { StudentTableComponent } from './student-table/student-table.component';
import {FormsModule} from '@angular/forms';
import { AddDataComponent } from './add-data/add-data.component';
import { DeleteDataComponent } from './delete-data/delete-data.component';
import { EditDataComponent } from './edit-data/edit-data.component';
import { ResultDataComponent } from './result-data/result-data.component';

import { HomeComponent } from './home/home.component';
import { UpdatedDataComponent } from './updated-data/updated-data.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailComponent,
    StudentTableComponent,
    AddDataComponent,
    DeleteDataComponent,
    EditDataComponent,
    ResultDataComponent,
   
    HomeComponent,
    UpdatedDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
