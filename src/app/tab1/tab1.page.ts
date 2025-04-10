import { Component } from '@angular/core';
import { SenhasService } from '../services/senhas.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page {

  // adiciona o botão "fechar" ao alerta
  alertButtons = ['Fechar'];
  inputNovaSenha: string = '';

  constructor(public senhasService: SenhasService){
    
  }

}
