import { Component, OnInit } from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { ImageUploadService } from './image-upload.service';

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent implements OnInit {

  ngOnInit(): void {
    alert("asdasd");
  }

  imageChangedEvent: any = '';
  croppedImage: any = '';
  imageWidth: any = '';
  imageHeight:any = '';
  transcriptedText: string = '';

  constructor(private imageUploadService: ImageUploadService){}

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
      this.imageUploadService.OCRPost(this.croppedImage).subscribe(
        (res) => this.transcriptedText = res.ParsedResults[0].ParsedText,
        (err) => console.error(err)
      );
    }

}
