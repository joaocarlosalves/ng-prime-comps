import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-tab-fixed-header',
  templateUrl: './tab-fixed-header.component.html',
  styleUrls: ['./tab-fixed-header.component.scss']
})
export class TabFixedHeaderComponent implements OnInit {

  cars: Car[];

  cols: any[];

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

}
