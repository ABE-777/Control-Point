import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'search-bar',
  templateUrl: 'search-bar.component.html',
  host: {
    '(document:click)': 'closeSearchBar($event)',
  }
})
export class SearchBarComponent implements OnInit {
  @Input() data: any;
  @Input() filters: string[];
  @Input() nestedFilters: NestedFilters;
  @Output() searchEnd: EventEmitter<any> = new EventEmitter<any>();
  filteredData: any;
  @ViewChild('searchBar') searchBar;
  searchText: string = '';
  isSearchOpen: boolean = false;

  constructor() {}

  ngOnInit() {

  }

  openSearchBar(e, input) {
    this.searchBar.nativeElement.classList.add('is-open');
    input.focus();
    setTimeout(() => this.isSearchOpen = true, 250);
  }

  closeSearchBar(event) {
    if (!this.searchBar.nativeElement.contains(event.target)) {
      this.searchBar.nativeElement.classList.remove('is-open');
      this.isSearchOpen = false;
    }
  }

  submitSearch() {
    if (!this.isSearchOpen) return;
    this.search();
  }

  search() {
    this.filteredData = this.searchText ? this.filteredData : this.data;
    let isMatch: boolean = false;

    this.filteredData = this.data.filter(item => {
      let searchText = this.searchText.toLocaleLowerCase();
      isMatch = false;

      this.filters.forEach((filter) => {
        if ( String( item[filter] ).toLowerCase().replace(/,/g, '').search(searchText) !== -1 ) {
          isMatch = true;
        }
      })

      if (this.nestedFilters !== undefined) {        
        item[this.nestedFilters.propWithArray]
          .forEach(el => this.nestedFilters.filters.forEach((filter) => {
            if (String(el[filter]).toLowerCase().replace(/,/g, '').search(searchText) !== -1) {
              isMatch = true;
            }
          }
            
          ));
      }    
      
      return isMatch;

    })
    this.searchEnd.emit(this.filteredData);
  }

}

interface NestedFilters {
  propWithArray: string;
  filters: string[];
}
