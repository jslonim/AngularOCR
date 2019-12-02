import { Component } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageWidth: any = '';
  imageHeight:any = '';
  transcriptedText: string = '';

  constructor(private appService: AppService){}

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }
    cropImage(){ 
      this.transcriptedText = 'Loading..'
      this.appService.OCRPost(this.croppedImage).subscribe(
        (res) => this.transcriptedText = res.ParsedResults[0].ParsedText,
        (err) => console.error(err)
      );
    }
}
