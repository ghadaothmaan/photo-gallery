import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {
  public photos: String[] = [
    'assets/img/1.png',
    'assets/img/2.png',
    'assets/img/3.png'
  ];

  constructor(
    public toastController: ToastController,
    public alertController: AlertController
  ) {}

  openPreview() {
    console.log('clicked');
  }

  // present toast with options
  async toastClicked() {
    const toast = await this.toastController.create({
      message:
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
