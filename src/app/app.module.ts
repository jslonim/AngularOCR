import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';
import { ImageUploadService } from './image-upload/image-upload.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ImageUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ImageUploadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
