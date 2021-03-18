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
				um: `um ${index}`,
				dois: `dois ${index}`,
				tres: `tres ${index}`,
				quatro: `quatro ${index}`,
				cinco: `cinco ${index}`,
			});			
		}

	}
}