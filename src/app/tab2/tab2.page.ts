import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  constructor(public photoService: PhotoService) {}

  // TODO: implement native camera work
  // and to do so cordova must work first and idk why it doesnt tbh!?
  takePicture() {
    this.photoService.toastClicked();
  }

  // TODO: finish it ig
  previewPhoto() {
    this.photoService.openPreview();
  }
}
