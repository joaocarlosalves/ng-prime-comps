import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-tab-state',
  templateUrl: './tab-state.component.html',
  styleUrls: ['./tab-state.component.scss']
})
export class TabStateComponent implements OnInit {

  cars1: Car[];

  cars2: Car[];

  cols: any[];

  selectedCar1: Car;

  selectedCar2: Car;

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsMedium().then(cars => this.cars1 = cars);
      this.carService.getCarsMedium().then(cars => this.cars2 = cars);

      this.cols = [
          { field: 'chassi', header: 'Chassi' },
          { field: 'ano', header: 'Ano' },
          { field: 'marca', header: 'Marca' },
          { field: 'cor', header: 'Cor' }
      ];
  }

}
