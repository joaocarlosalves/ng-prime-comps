import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/interfaces/car.interface';
import { CarService } from 'src/app/services/car.service';
import { FilterUtils } from 'primeng/utils';
import { LazyLoadEvent } from 'primeng/api';
import { SelectItem } from 'primeng/api';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-tab-scroll',
  templateUrl: './tab-scroll.component.html',
  styleUrls: ['./tab-scroll.component.scss'],
  providers: [MessageService]
})

export class TabScrollComponent implements OnInit {
    cars1: Car[];

    cars2: Car[];

    cols: any[];

    frozenCars: Car[];

    frozenCols: any[];

    scrollableCols: any[];
    
    dialogVisible: boolean;

    constructor(private carService: CarService) {}

    ngOnInit() {
        this.carService.getCarsMedium().then(cars => this.cars1 = cars);
        this.carService.getCarsSmall().then(cars => this.cars2 = cars);

        this.cols = [
            { field: 'chassi', header: 'Chassi' },
            { field: 'ano', header: 'Ano' },
            { field: 'marca', header: 'Marca' },
            { field: 'cor', header: 'Cor' }
        ];

        this.scrollableCols = [
            { field: 'ano', header: 'Ano' },
            { field: 'marca', header: 'Marca' },
            { field: 'cor', header: 'Cor' },
            { field: 'ano', header: 'Ano' },
            { field: 'marca', header: 'Marca' },
            { field: 'cor', header: 'Cor' }
        ];

        this.frozenCols = [
            { field: 'chassi', header: 'Chassi' }
        ];

        this.frozenCars = [
            { "marca": "BMW", "ano": 2013, "cor": "Grey", "chassi": "fh2uf23" },
            { "marca": "Chevrolet", "ano": 2011, "cor": "Black", "chassi": "4525g23" }
        ];
    }

    showDialog() {
        this.dialogVisible = true;
    }
}
