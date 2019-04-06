import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { PhotoViewer } from '@ionic-native/photo-viewer/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: string[] = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png',
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png'
  ];

  constructor(
    public toastController: ToastController,
    public alertController: AlertController,
    private photoViewer: PhotoViewer
  ) {}

  // TODO: fix? sth to do with cordova and native ionic
  // and guess what i cant get it work either
  // but tbh i need to look more into it
  // or maybe look into routing?
  openPreview() {
    console.log('clicked');
    this.photoViewer.show(this.photos[0]);
  }

  // present toast with options
  async toastClicked() {
    const toast = await this.toastController.create({
      message:
        // tslint:disable-next-line: quotemark
        "Boohoo~ Not done yet! Soon though! So here's a toast for now, cheers!",
      showCloseButton: true,
      position: 'bottom',
      closeButtonText: 'Dismiss',
      color: 'dark',
      duration: 10000
    });
    toast.present();
  }

  // present alert
  async alertClicked() {
    const alert = await this.alertController.create({
      header: 'Boohoo~',
      message: 'Not done yet. Soon though! Still learning. Baby steps!',
      buttons: ['Hwaiting~']
    });

    await alert.present();
  }
}

class Photo {
  data: any;
}
