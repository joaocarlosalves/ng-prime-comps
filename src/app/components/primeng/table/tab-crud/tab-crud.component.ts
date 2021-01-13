import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-crud',
  templateUrl: './tab-crud.component.html',
  styleUrls: ['./tab-crud.component.scss']
})
export class TabCrudComponent implements OnInit {

  displayDialog: boolean;

  car: Car = {};

  selectedCar: Car;

  newCar: boolean;

  cars: Car[];

  cols: any[];

  constructor(private carService: CarService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          { field: 'chassi', header: 'Chassi' },
          { field: 'ano', header: 'Ano' },
          { field: 'marca', header: 'Marca' },
          { field: 'cor', header: 'Cor' }
      ];
  }

  showDialogToAdd() {
      this.newCar = true;
      this.car = {};
      this.displayDialog = true;
  }

  save() {
      let cars = [...this.cars];
      if (this.newCar)
          cars.push(this.car);
      else
          cars[this.cars.indexOf(this.selectedCar)] = this.car;

      this.cars = cars;
      this.car = null;
      this.displayDialog = false;
  }

  delete() {
      let index = this.cars.indexOf(this.selectedCar);
      this.cars = this.cars.filter((val, i) => i != index);
      this.car = null;
      this.displayDialog = false;
  }

  onRowSelect(event) {
      this.newCar = false;
      this.car = this.cloneCar(event.data);
      this.displayDialog = true;
  }

  cloneCar(c: Car): Car {
      let car = {};
      for (let prop in c) {
          car[prop] = c[prop];
      }
      return car;
  }

}
