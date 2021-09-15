import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //Properties//

  title = 'Calculadora';

  primerNumero: number = 0;
  segundoNumero: number = 0;
  resultado: number = 0;


  //Methods//
  sumar(): void{  
    this.resultado = this.primerNumero + this.segundoNumero;

  }

  restar(): void{  
    this.resultado = this.primerNumero - this.segundoNumero;
  }

}
