import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-dois',
  templateUrl: './exemplo-dois.component.html',
  styleUrls: ['./exemplo-dois.component.css'],
})
export class ExemploDoisComponent implements OnInit {

	items = []
	count = 100000; 	// Oh god 😂

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
}