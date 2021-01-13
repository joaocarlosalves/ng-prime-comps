import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { CarService } from 'src/app/services/car.service';
import { Car } from 'src/app/interfaces/car.interface';

@Component({
  selector: 'app-tab-lazy',
  templateUrl: './tab-lazy.component.html',
  styleUrls: ['./tab-lazy.component.scss']
})
export class TabLazyComponent implements OnInit {

  datasource: Car[];

  cars: Car[];

  totalRecords: number;

  cols: any[];

  loading: boolean;

  constructor(private carService: CarService) { }

  ngOnInit() {
      //datasource imitation
      this.carService.getCarsLarge().then(cars => {
          this.datasource = cars;
          this.totalRecords = this.datasource.length;
      });

      this.cols = [
          { field: 'chassi', header: 'Chassi' },
          { field: 'ano', header: 'Ano' },
          { field: 'marca', header: 'Marca' },
          { field: 'cor', header: 'Cor' }
      ];

      this.loading = true;
  }

  loadCarsLazy(event: LazyLoadEvent) {  
      this.loading = true;

      //in a real application, make a remote request to load data using state metadata from event
      //event.first = First row offset
      //event.rows = Number of rows per page
      //event.sortField = Field name to sort with
      //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
      //filters: FilterMetadata object having field as key and filter value, filter matchMode as value

      //imitate db connection over a network
      setTimeout(() => {
          if (this.datasource) {
              this.cars = this.datasource.slice(event.first, (event.first + event.rows));
              this.loading = false;
          }
      }, 1000);
  }

}
