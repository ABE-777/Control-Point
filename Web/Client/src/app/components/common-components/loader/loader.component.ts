import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../../../services/loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html'
})
export class LoaderComponent implements OnInit {
  showLoader: boolean;
  showMiniLoader: boolean;

  constructor(private loaderService: LoaderService) { }

  ngOnInit() {
    this.loaderService.status.subscribe((val: boolean) => { this.showLoader = val; });
    this.loaderService.statusMini.subscribe((val: boolean) => { this.showMiniLoader = val; });
  }

}
