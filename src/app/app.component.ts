import { Component, output, Output } from '@angular/core';
import { NgIf, NgForOf } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './message.service';

interface Image {
  image: string;
  exif: any;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  
  title = 'testapp';
  
  @Output() image: Image = {image: '', exif: {}};
  @Output() imageGroup: Image[] = [];
  constructor(private messageService: MessageService) {
  
    
  }
  public async getImageFromFlutter(){
     const result: Image[] = await this.messageService.recieveImageFromFlutter();
     result.forEach((image: Image) => {
        this.image.image = image.image;
        this.image.exif = JSON.parse(image.exif);
        this.imageGroup.push(this.image); 
     });
  }
  
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
