import { Component } from '@angular/core';

import { PopoverController } from '@ionic/angular';

@Component({
  template: `
    <ion-list>
      <ion-item button (click)="close('https://aiesec.org/')">
        <ion-label>AIESEC website</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://www.facebook.com/AIESEC.Tunisia/')">
        <ion-label>AIESEC facebook page</ion-label>
      </ion-item>
      <ion-item button (click)="close('https://www.instagram.com/aiesecintunisia/')">
        <ion-label>AIESEC Instagram</ion-label>
      </ion-item>
    </ion-list>
  `
})
export class PopoverPage {
  constructor(public popoverCtrl: PopoverController) {}

  support() {
    // this.app.getRootNavs()[0].push('/support');
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }
}
