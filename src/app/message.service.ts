import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
   sendMessageToFlutter(message: string) {
    if (window.flutter_inappwebview) {
      window.flutter_inappwebview.callHandler('messageHandler', message);
    }
  }

  async recieveImageFromFlutter() {
    if (window.flutter_inappwebview) {
     const result =  await window.flutter_inappwebview.callHandler('photoPicker'); 
     return result;
    }
  }

  


}