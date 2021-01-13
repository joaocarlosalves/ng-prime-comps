import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-form-basic',
  templateUrl: './form-basic.component.html',
  styleUrls: ['./form-basic.component.scss']
})
export class FormBasicComponent implements OnInit {

  constructor(private messageService: MessageService) {}

  @Input() fileInput;
  fileCNPJ;
  fileName = "Cloque";

  ngOnInit(): void {
  }

  selectFiles(event) {
    console.log(event[0].name);
    this.fileName = event[0].name;
  }

}
