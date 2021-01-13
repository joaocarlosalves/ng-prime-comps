import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MenuService {
    constructor(private http: HttpClient) { }

    returnMenu() {
        return this.http.get('../assets/json/menu.json');
    }
}