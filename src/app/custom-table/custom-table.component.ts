import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { TableCell } from '../models/table-cell';
import { TableRow } from '../models/table-row';
import { TableForm } from '../models/table-form';

@Component({
  selector: 'app-custom-table',
  templateUrl: './custom-table.component.html',
  styleUrls: ['./custom-table.component.scss']
})

export class CustomTableComponent implements OnInit {

	private rows: TableRow[] = [];
	private columns: Array<String> = [];

	private selectedRow: TableRow;

	@Input()
	set data(data: TableForm) {
		this.createTable(data);
	}

	constructor() { }

	ngOnInit() {
	
	}

	createTable(form: TableForm){
		this.setColumns(form.columns);
		this.setRows(form.rows);
	}

	setColumns(headers: Array<String>){
		headers.forEach(header => {
			this.columns.push(header);
		});
	}

	setRows(rows: Array<Object>){
		
		for(var i = 0; i < rows.length; i++){

			let tableCells: TableCell[] = [];
			tableCells.push(new TableCell(i));

			Object.values(rows[i]).map((value) => {
				tableCells.push(new TableCell(value));
			});

			this.rows.push(new TableRow(tableCells, i));
		}
		
	}

	editRow(index: number){
		this.rows[index].isActive = true;
		this.selectedRow = this.rows[index];
	}

	saveChanges(index: number){
		this.rows[index].isActive = false;
	}

	

}












