import { Component } from '@angular/core';


import { HomePage } from '../home/home';
import { ContenidoPruebaPage } from '../contenido-prueba/contenido-prueba';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ContenidoPruebaPage;
  

  constructor() {

  }
}
