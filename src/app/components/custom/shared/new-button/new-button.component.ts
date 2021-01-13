import { Component, OnInit, Input } from '@angular/core';

/*
  1- Por padrão, o tipo sempre será button, para colocar submit, basta colocar 
  type="submit" no componente.
  2- Por padrão, o botão será sempre azul com letra branca, para mudar para o padrão cinza,
  ou outro a ser construído, basta passar o parametro btnStyle='gray', por exemplo.
  3- Para adicionar um ícone do Font Awesome, basta pegar o prefixo do ícone na lista 
  no site. Ex: icon='plus' adicionará o ícone de "+" que tem a classe "fa-plus".
  SITE: https://fontawesome.com/v4.7.0/icons/ (Será atualizado para a versão 5 em breve). 
  PS: Não inserir "fa-", apenas o nome do ícone em minúsculo.
  4- Para alterar o lado do ícone, basta colocar o atributo iconside='right', por padrão, o ícone
  vem alinhado à esquerda.
  5- Para deixar sem ícone, basta não colocar o atributo icon.
  6- O texto do botão pode ser colocado dentro da tag <new-button>TEXTO</new-button>,
  ou como atributo text='TEXTO', no corpo da tag <new-button text='TEXTO'></new-button>
  7- Para adicionar um metodo a ser chamado no local do componente, basta usar o mesmo
  que é padrão do Angular (click)='nomeDoMetodo(parametroSeTiver)'

  EXEMPLO:
  <new-button type='submit' btnStyle='gray' iconside='right' icon="plus" (click)='meuMetodo(param)'>
    ADICIONAR TÍTULO
  </new-button>
*/

@Component({
  selector: 'new-button',
  template: `
    <button [type]='this.type' class='new-button' [ngClass]="this.getClass(this.btnStyle)">
      <i 
        *ngIf='this.icon && !this.iconside || this.icon && this.iconside == "left"' 
        class="fa" 
        [ngClass]="'fa-'+this.icon">
      </i>
      <span *ngIf='this.text'>{{ this.text }}</span>
      <span *ngIf='!this.text'><ng-content></ng-content></span>
      <i 
        *ngIf='this.icon && this.iconside == "right"' 
        class="fa icon-right" 
        [ngClass]="'fa-'+this.icon">
      </i>
    </button>
  `,
  styleUrls: []
})
export class NewButtonComponent implements OnInit {

  @Input() icon: string;
  @Input() text: string;
  @Input() iconside: string;
  @Input() btnStyle: string;
  @Input() border: boolean;
  @Input() background: boolean;
  @Input() type: string;
  @Input() disabled: any;

  constructor() { }

  ngOnInit() {
    if(!this.type || this.type == undefined || this.type == null || this.type == '') this.type = 'button';
  }

  getClass(btnStyle) {
    switch(btnStyle) {
      case 'default': return 'new-button-default';
      case 'gray': return 'new-button-gray';
      default: return 'new-button-default';
    }
  }

}
