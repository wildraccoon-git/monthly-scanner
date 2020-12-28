import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  scannedText: string;
  format: string;
  constructor(private barcodeScanner: BarcodeScanner) {}
  scan(){
    this.barcodeScanner.scan()
    .then((barcodeData)=>{
      if(barcodeData.cancelled){
        this.setValues("", "(cancelled)");
      }
      else{
        this.setValues(
          barcodeData.text || '???',
          barcodeData.format || '???'
        );
      }
    })
    .catch((err)=>{
      this.setValues(`Error ${err}`, "");
    });

  }

  clear(){
    this.setValues("", "");
  }

  setValues(s, f){
    this.scannedText = s;
    this.format = f;
  }
}
