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
    console.log("Primer Numero:" +  typeof(this.primerNumero));
    console.log("Segundo Numero:" + typeof(this.segundoNumero));
    console.log(parseInt(this.primerNumero) + parseInt(this.segundoNumero));

  }

}
