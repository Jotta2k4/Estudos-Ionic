// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-tab2',
//   templateUrl: 'tab2.page.html',
//   styleUrls: ['tab2.page.scss'],
//   standalone: false,
// })
// export class Tab2Page {

//   constructor() {}

// }

import { Component } from '@angular/core';

@Component({
  selector: 'app-guiche',
  templateUrl: './guiche.component.html',
  styleUrls: ['./guiche.component.scss']
})
export class GuicheComponent {

  chamarProximaSenha() {
    // Simulação da chamada
    alert('Simulação: Próxima senha chamada');
  }
}
