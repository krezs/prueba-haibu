import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MasinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-masinfo',
  templateUrl: 'masinfo.html',
})
export class MasinfoPage {
  item;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
      this.item= navParams.data.item;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MasinfoPage');
  }
  validarRut(rut) {
    // Despejar Puntos
    let valor = rut.replace('.','');
    // Despejar Guión
    valor = valor.replace('-','');
    
    // Aislar Cuerpo y Dígito Verificador
    let cuerpo = valor.slice(0,-1);
    let dv = valor.slice(-1).toUpperCase();
    
    // Formatear RUN
    rut = cuerpo + '-'+ dv
    
    // Si no cumple con el mínimo ej. (n.nnn.nnn)
    if(cuerpo.length < 7) { return false; }
    
    // Calcular Dígito Verificador
    let suma = 0;
    let multiplo = 2;
    let index:any;
    // Para cada dígito del Cuerpo
    for(let i=1;i<=cuerpo.length;i++) {
    
        // Obtener su Producto con el Múltiplo Correspondiente
        index = multiplo * valor.charAt(cuerpo.length - i);
        
        // Sumar al Contador General
        suma = suma + index;
        
        // Consolidar Múltiplo dentro del rango [2,7]
        if(multiplo < 7) { multiplo = multiplo + 1; } else { multiplo = 2; }
  
    }
    
    // Calcular Dígito Verificador en base al Módulo 11
    let dvEsperado = 11 - (suma % 11);
    
    // Casos Especiales (0 y K)
    dv = (dv == 'K')?10:dv;
    dv = (dv == 0)?11:dv;
    
    // Validar que el Cuerpo coincide con su Dígito Verificador
    if(dvEsperado != dv) { return false; }
    
    // Si todo sale bien, eliminar errores (decretar que es válido)
    return true;
}



 validarFechaNacimiento(fecha)
{

    if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(fecha))
        return false;

    let parts = fecha.split("/");
    let dia = parseInt(parts[0], 10);
    let mes = parseInt(parts[1], 10);
    let anio = parseInt(parts[2], 10);

    if(anio < 1000 || anio > 3000 || mes == 0 || mes > 12)
        return false;

    let largoMeses = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if(anio % 400 == 0 || (anio % 100 != 0 && anio % 4 == 0))
      largoMeses[1] = 29;

    return dia > 0 && dia <= largoMeses[mes - 1];
};
}
