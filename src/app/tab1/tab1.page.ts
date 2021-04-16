import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  searchText = '';

  items = [
    { title: 'Numero Uno' },
    { title: 'Numero Dos' },
    { title: 'Numero Tres' },
  ];
  filteredItems = [...this.items];

  constructor() {}

  filterList() {
    // console.log('text', this.searchText);
    // console.log('list', this.filteredItems);
    this.filteredItems = this.searchText.trim() === '' ? [...this.items]
      : this.items.filter(item => item.title.toLowerCase()
        .includes(this.searchText.toLowerCase().trim()));
  }
}
