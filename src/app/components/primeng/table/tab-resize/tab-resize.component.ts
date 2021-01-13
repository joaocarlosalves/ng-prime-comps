import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-tab-resize',
  templateUrl: './tab-resize.component.html',
  styleUrls: ['./tab-resize.component.scss']
})
export class TabResizeComponent implements OnInit {

  cars1: Car[];

  cars2: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars1 = cars);
      this.carService.getCarsMedium().then(cars => this.cars2 = cars);

      this.cols = [
          { field: 'chassi', header: 'Chassi', width: '25%'},
          { field: 'ano', header: 'Ano', width: '15%' },
          { field: 'marca', header: 'Marca', width: '35%' },
          { field: 'cor', header: 'Cor', width: '25%' }
      ];
  }

}
