import { TableCell } from './table-cell';

export class TableRow{

	cells: TableCell[] = [];
	index: number;
	isActive: boolean = false;

	constructor(cells: TableCell[], index: number){
		this.cells = cells;
		this.index = index;
	}
}