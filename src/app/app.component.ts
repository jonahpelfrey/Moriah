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

  private myOthersObject = {
    name: "Tony",
    age: "40",
    occupation: "Civil Engineer",
    email: "tony@gmail.com"
  };

  constructor(private dataService: DataService) {}

  ngOnInit() {
  	this.dataService.getArtists();

    this.tableForm.columns.push("Name", "Age", "Occupation", "Email");
    this.tableForm.rows.push(this.myObject, this.myOtherObject, this.myOthersObject);
  }
}
