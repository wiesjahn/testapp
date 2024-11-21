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
  
  @Output() image = ''
  @Output() exif: any;
  constructor(private messageService: MessageService) {
  
    
  }
  public async getImageFromFlutter(){
     const result = await this.messageService.recieveImageFromFlutter();
    this.image= result.image;
     this.exif = JSON.parse(result.exif);
  }
  
  objectKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
