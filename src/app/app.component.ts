import { Component, OnInit } from '@angular/core';
import { DataService } from './services/data.service';

import { TableForm } from './models/table-form';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'app';

  private tableForm: TableForm = new TableForm();

  private myObject = {
  	name: "Jim",
  	age: "30",
  	occupation: "Software Engineer",
  	email: "jim@gmail.com"
  };

  private myOtherObject = {
  	name: "Nancy",
  	age: "35",
  	occupation: "Mechanical Engineer",
  	email: "nancy@gmail.com"
  };

  private tableData = {
  	rows: [],	//This would hold an array of objects, each occupying a single row in the table
  	columns: ["#", "Name", "Age", "Occupation", "Email"]
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.dataService.getArtists();
  	this.tableData.rows.push(this.myObject);
  	this.tableData.rows.push(this.myOtherObject);

    this.tableForm.columns.push("Name", "Age", "Occupation", "Email");
    this.tableForm.rows.push(this.myObject, this.myOtherObject);
  }
}
