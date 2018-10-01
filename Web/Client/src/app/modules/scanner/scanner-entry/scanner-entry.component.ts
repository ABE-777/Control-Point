import { Component, OnInit } from '@angular/core';
import { ScannerService } from '../scanner.service';

@Component({
  selector: 'app-scanner-entry',
  templateUrl: './scanner-entry.component.html'
})
export class ScannerEntryComponent implements OnInit {

  constructor(public scannerService: ScannerService) { }

  ngOnInit() {}

}
