import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) {
  }

  uploadImage(file: File, uuid): Observable<any> {
    const formData = new FormData();
    formData.append('image', file, uuid);
    return this.http.post('http://localhost:8080/create/user/photo', formData);
  }
}

