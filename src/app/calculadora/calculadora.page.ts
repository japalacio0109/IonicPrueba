import { Component, OnInit, Input } from '@angular/core';
import { Calculadora } from '../models/calculadora';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.page.html',
  styleUrls: ['./calculadora.page.scss'],
})
export class CalculadoraPage implements OnInit {

  constructor() { }

  @Input() calculadora: Calculadora = {
    numero: 0,
    completo: "",
    resultado: 0,
    operacion: ""
  };

  ngOnInit() {
  }

  setClearAll() {
    this.calculadora.resultado = 0;
    this.calculadora.operacion = "";
    this.calculadora.numero = 0;
    this.calculadora.completo = "";
  }

  setClear() {
    this.calculadora.numero = 0;
    this.calculadora.completo = "";
  }

  setNumero(value: number): void {
    if (this.calculadora.operacion =="" && this.calculadora.resultado != 0){
      this.setClearAll();
    }else{
      this.calculadora.completo += value;
      this.calculadora.numero = parseFloat(this.calculadora.completo);
    }
  }

  setOperacion(value: string) {
    if (value == "-" &&
       (this.calculadora.completo == "" || this.calculadora.completo == "-") &&
      !(this.calculadora.operacion == "" && this.calculadora.resultado != 0)) {
      this.calculadora.completo = value;
    } else {
      if(this.calculadora.completo != "" && this.calculadora.completo != "-"){
        if (this.calculadora.operacion != ""){
          this.doOperacion();
        }else{
          this.calculadora.resultado = parseFloat(this.calculadora.completo);
          this.calculadora.numero = parseFloat(this.calculadora.completo);
        }
      }
      this.calculadora.operacion = value;
      this.calculadora.completo = "";
    }
  }

  doOperacion() {
    if(this.calculadora.completo != "" && this.calculadora.completo != "-"){

      switch (this.calculadora.operacion) {
        case '+':
          this.calculadora.numero = this.calculadora.resultado = this.doSuma(this.calculadora.resultado, this.calculadora.completo);
          break
        case '-':
          this.calculadora.numero = this.calculadora.resultado = this.doResta(this.calculadora.resultado, this.calculadora.completo);
          break
        case '*':
          this.calculadora.numero = this.calculadora.resultado = this.doMultiplicacion(this.calculadora.resultado, this.calculadora.completo);
          break
        case '/':

          this.calculadora.numero = this.calculadora.resultado = this.doDivision(this.calculadora.resultado, this.calculadora.completo);

          break
        // case '=':
        //   this.calculadora.numero = this.calculadora.resultado;
        //   break
        default:
          this.calculadora.completo = "";
          this.calculadora.operacion = "";
      }
    }

  }

  doSuma (numA: number, numB: string){
    this.calculadora.operacion = "";
    this.calculadora.completo = "";
    let res = numA + parseFloat(numB);
    return res;
  }



  doResta (numA: number, numB: string){
    this.calculadora.operacion = "";
    this.calculadora.completo = "";
    return numA - parseFloat(numB);
  }

  doMultiplicacion (numA: number, numB: string){
    this.calculadora.operacion = "";
    this.calculadora.completo = "";
    return numA * parseFloat(numB);
  }

  doDivision (numA: number, numB: string){
    this.calculadora.operacion = "";
    this.calculadora.completo = "";
    if (parseFloat(numB) != 0)
    {
      return numA * parseFloat(numB);
    }

  }

}
