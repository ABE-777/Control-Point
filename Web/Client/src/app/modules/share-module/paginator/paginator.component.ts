import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit {
  @Input() itemsTotal: number;
  selectedPage: number = 0;
  rowsPerPage = 10;

  constructor() { }

  ngOnInit() {
  }

  pageChanged(e: any) {
    console.log('Got from pager: ');
    console.log(e);
    //this.selectedPage = pageNumber;
  }

}
