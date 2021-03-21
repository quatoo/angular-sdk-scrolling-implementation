import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-final',
  templateUrl: './exemplo-final.component.html',
  styleUrls: ['./exemplo-final.component.css'],
})
export class ExemploFinalComponent implements OnInit {

	items = []
	count = 100000; 	// Let's do this 🦾

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