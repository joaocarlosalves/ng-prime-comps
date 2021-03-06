import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
    menus = {
      "tabelas": {
          "title": "Tabelas / Data Grid",
          "list": [
              { "slug": "tab-basica", "text": "TABELA BÁSICA" },
              { "slug": "tab-paginacao", "text": "COM PAGINAÇÃO" },
              { "slug": "tab-editar", "text": "EDITAR CÉLULAS" },
              { "slug": "tab-crud", "text": "INSERIR LINHA (CRUD)" },
              { "slug": "tab-sort", "text": "ALTERNAR ORDEM ↑↓" },
              { "slug": "tab-header", "text": "HEADER FIXO" },
              { "slug": "tab-scroll", "text": "SCROLL & FROZEN CELL" } ,
              { "slug": "tab-toggle", "text": "ROW GROUP / TOGGLE" },
              { "slug": "tab-resize", "text": "REDIMENSIONAR" },
              { "slug": "tab-reordenar", "text": "REORDENAR" },
              { "slug": "tab-selec-col", "text": "SELECIONAR COLUNAS EXIBIDAS" },
              { "slug": "tab-responsivo", "text": "RESPONSIVA" },
              { "slug": "tab-context-menu", "text": "CONTEXT MENU" },
              { "slug": "tab-export", "text": "EXPORTAR P/ PDF/EXCEL" },
              { "slug": "tab-state", "text": "USANDO STATE/STORAGE" }
          ]
      },
      "formularios": {
          "title": "Formulário/Campos",
          "list": [
              { "slug": "form-basico", "text": "FORMULÁRIO BÁSICO" },
              { "slug": "form-botoes", "text": "BOTÕES" }
          ]
      }
  }
    constructor() { }

    ngOnInit() {
      //this.menu.returnMenu().subscribe(menu => this.menus = menu);

      setTimeout(() => { console.log(this.menus.tabelas) }, 1000)
    }

}
