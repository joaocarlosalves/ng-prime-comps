import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-tab-pagin',
  templateUrl: './tab-pagin.component.html',
  styleUrls: ['./tab-pagin.component.scss']
})
export class TabPaginComponent implements OnInit {

  cars: Car[] = [];

  cols: any[];

  first = 0;

  rows = 10;

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsMedium().then(cars => this.cars = cars);

      this.cols = [
          { field: 'chassi', header: 'Chassi' },
          { field: 'ano', header: 'Ano' },
          { field: 'marca', header: 'Marca' },
          { field: 'cor', header: 'Cor' }
      ];
  }

  next() {
      this.first = this.first + this.rows;
  }

  prev() {
      this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.first === (this.cars.length - this.rows);
  }

  isFirstPage(): boolean {
      return this.first === 0;
  }
}
