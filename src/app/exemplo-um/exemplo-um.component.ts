import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplo-um',
  templateUrl: './exemplo-um.component.html',
  styleUrls: ['./exemplo-um.component.css'],
})
export class ExemploUmComponent implements OnInit {

	items = []
	count = 50;

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