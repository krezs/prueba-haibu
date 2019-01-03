import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MasinfoPage } from '../masinfo/masinfo';
import { HaibuProvider } from '../../providers/haibu/haibu';
/**
 * Generated class for the ContenidoPruebaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-contenido-prueba',
  templateUrl: 'contenido-prueba.html',
})
export class ContenidoPruebaPage {

/* Arreglo estatico de prueba  */

 /* lista : Array<any> = [
    {
      "id": 1,
      "nombre": "Omar",
      "apellido": "Trapaga",
      "telefono": 56221984968,
      "rut": "21984968-0",
      "fechaNacimiento": "12/05/1982",
      "direccion": {
        "calle": "Av. Matta",
        "numero": 143,
        "comuna": "Santiago"
      },
      "activo": 1
    },
    {
      "id": 2,
      "nombre": "Juan Manuel",
      "apellido": "Gonzalez",
      "telefono": 56967008115,
      "fechaNacimiento": "14/14/1990",
      "rut": "6700811-1",
      "direccion": {
        "calle": "Los aromos",
        "numero": 1111,
        "comuna": "Santiago"
      },
      "activo": 1
    },
    {
      "id": 3,
      "nombre": "Alexander",
      "apellido": "Rodriguez",
      "telefono": 567170178,
      "rut": "17017638-3",
      "fechaNacimiento": "12/12/1990",
      "direccion": {
        "calle": "Esmeralda",
        "numero": 302,
        "nombre": "Ñuñoa"
      },
      "activo": 1
    },
    {
      "id": 4,
      "nombre": "Fransico",
      "apellido": "Aranda",
      "telefono": 56288727695,
      "rut": "8872769-k",
      "fechaNacimiento": "12/12/0",
      "direccion": {
        "calle": "Zenon",
        "numero": 456,
        "comuna": "San Bernardo"
      },
      "activo": 0
    }    
  ]
*/
  
  personas
  lista:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public proovedor: HaibuProvider) {
    this.initializeItems();
  }

  verMasInfo(item){
    this.navCtrl.push(MasinfoPage, { item: item });
  }

  initializeItems(){
    this.lista=this.personas;
  }

  ionViewDidLoad() {
    this.proovedor.obtenerDatos().subscribe(
      (data)=>{this.personas=data;},
      (error)=>{console.log(error);}
    )
  }

  validarX(nombre){
    if(nombre=='Omar'){
      console.log('ES HOMAAAAR');
    }
  }

  buscarPersona(ev){

    this.initializeItems();

    let val= ev.target.value;

    if(val && val.trim() != ''){
      this.personas= this.personas.filter((item) => {
        return ((item.nombre).toLowerCase().indexOf(val.toLowerCase())> -1 );
      })
    }else{
      this.ionViewDidLoad();
    }
  }

}
