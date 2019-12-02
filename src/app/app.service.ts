import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  OCRPost(image: string): Observable<any> {
    let body = new URLSearchParams();
    body.set('base64Image', image);
    body.set('isOverlayRequired', 'false');
    body.set('language', "eng");

    let headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
      'apikey': '5becd9826388957'
    });

    let options = { headers: headers };

    return this.http.post('https://api.ocr.space/parse/image', body.toString(), options)
      .pipe(catchError(this.formatErrors));
  }

  private formatErrors(error: HttpErrorResponse) {
    return throwError(error);
  }
}
export class Body{
  base64Image:string;
  language:string;
  isOverlayRequired: string;
}