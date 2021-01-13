import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { MessageService, MenuItem } from 'primeng/api';

@Component({
  selector: 'app-tab-context-menu',
  templateUrl: './tab-context-menu.component.html',
  styleUrls: ['./tab-context-menu.component.scss'],
  providers: [MessageService]
})
export class TabContextMenuComponent implements OnInit {
  cars: Car[];

  cols: any[];

  selectedCar: Car;

  selectCars: Car[];

  items: MenuItem[];

  constructor(private carService: CarService, private messageService: MessageService) { }

  ngOnInit() {
      this.carService.getCarsSmall().then(cars => this.cars = cars);

      this.cols = [
          { field: 'chassi', header: 'Chassi' },
          { field: 'ano', header: 'Ano' },
          { field: 'marca', header: 'Marca' },
          { field: 'cor', header: 'Cor' }
      ];

      this.items = [
          { label: 'View', icon: 'pi pi-search', command: (event) => this.viewCar(this.selectedCar) },
          { label: 'Delete', icon: 'pi pi-times', command: (event) => this.deleteCar(this.selectedCar) }
      ];
  }

  viewCar(car: Car) {
      this.messageService.add({ severity: 'info', summary: 'Car Selected', detail: car.marca + ' - ' + car.marca });
  }

  deleteCar(car: Car) {
      let index = -1;
      for (let i = 0; i < this.cars.length; i++) {
          if (this.cars[i].chassi == car.marca) {
              index = i;
              break;
          }
      }
      this.cars.splice(index, 1);
      
      this.messageService.add({ severity: 'info', summary: 'Car Deleted', detail: car.marca + ' - ' + car.marca });
  }
}
