import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {
  @Input() menus;
  @Input() title;
  opened = false;

  constructor() { }

  ngOnInit(): void {
    this.title = this.menus.title;
    console.log(this.title)
  }

  toggle() {
    this.opened = !this.opened;
    console.log(this.opened);
  }

}
