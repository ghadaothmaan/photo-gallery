import { PhotoPreviewPage } from './../photo-preview/photo-preview.page';
import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { NavParams, NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public photoService: PhotoService, public nav: NavController) {}

  // TODO: implement native camera work
  // and to do so cordova must work first and idk why it doesnt tbh!?
  takePicture() {
    this.photoService.toastClicked();
  }

  // TODO: finish it i guess
  previewPhoto() {
    this.nav.navigateForward('photo-preview');
    this.photoService.openPreview();
  }
}
