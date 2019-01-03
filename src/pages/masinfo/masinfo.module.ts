import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MasinfoPage } from './masinfo';

@NgModule({
  declarations: [
    MasinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(MasinfoPage),
  ],
})
export class MasinfoPageModule {}
