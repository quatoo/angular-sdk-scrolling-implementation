import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-tres',
  templateUrl: './exemplo-tres.component.html',
  styleUrls: ['./exemplo-tres.component.css'],
})
export class ExemploTresComponent implements OnInit {

	items = []
	count = 100000; 	// Let's do this 🦾
	page = 1;
	itemsPerPage = 10;

	constructor() { }

	ngOnInit(): void {

		for (let index = 0; index < this.count; index++) {
			this.items.push({
				um: `um ${index + 1}`,
				dois: `dois ${index + 1}`,
				tres: `tres ${index + 1}`,
				quatro: `quatro ${index + 1}`,
				cinco: `cinco ${index + 1}`,
			});
		}

	}

	nextPage(): void {
		this.page += 1;
	}

	prevPage(): void {
		this.page -= 1;
	}
}