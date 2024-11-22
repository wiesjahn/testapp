import { Component, output, Output } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  title = 'testapp';
  
  @Output() imageGroup: any = [];
  @Output() exif: any;
  constructor(private messageService: MessageService) {
  
    
  }
  public async getImageFromFlutter(){
    if(window.flutter_inappwebview){
      const result = await this.messageService.recieveImageFromFlutter();
      result.forEach((image: any) => {
        const imageObj = {
          "image": image.image,
          "exif": JSON.parse(image.exif)
        }
        this.imageGroup.push(imageObj);
      });
      
    }else{
      console.log('Not in app');
    }
  }
  
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
