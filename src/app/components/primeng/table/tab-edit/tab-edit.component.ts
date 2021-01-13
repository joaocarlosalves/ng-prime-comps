import { Component, OnInit } from '@angular/core';
import { SelectItem, MessageService } from 'primeng/api';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { FilterUtils } from 'primeng/utils';
import { LazyLoadEvent } from 'primeng/api';

@Component({
  selector: 'app-tab-edit',
  templateUrl: './tab-edit.component.html',
  styleUrls: ['./tab-edit.component.scss'],
  providers: [MessageService]
})
export class TabEditComponent implements OnInit {

  cars1: Car[];

  cars2: Car[];

  marcas: SelectItem[];

  clonedCars: { [s: string]: Car; } = {};

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars1 = cars);
      this.carService.getCarsSmall().then(cars => this.cars2 = cars);

      this.marcas = [
          {label: 'Audi', value: 'Audi'},
          {label: 'BMW', value: 'BMW'},
          {label: 'Fiat', value: 'Fiat'},
          {label: 'Ford', value: 'Ford'},
          {label: 'Honda', value: 'Honda'},
          {label: 'Jaguar', value: 'Jaguar'},
          {label: 'Mercedes', value: 'Mercedes'},
          {label: 'Renault', value: 'Renault'},
          {label: 'VW', value: 'VW'},
          {label: 'Volvo', value: 'Volvo'}
      ];
  }

  onRowEditInit(car: Car) {
      this.clonedCars[car.marca] = {...car};
  }

  onRowEditSave(car: Car) {
      if (car.ano > 0) {
          delete this.clonedCars[car.marca];
          this.messageService.add({severity:'success', summary: 'Success', detail:'Car is updated'});
      }  
      else {
          this.messageService.add({severity:'error', summary: 'Error', detail:'Ano is required'});
      }
  }

  onRowEditCancel(car: Car, index: number) {
      this.cars2[index] = this.clonedCars[car.marca];
      delete this.clonedCars[car.marca];
  }

}
