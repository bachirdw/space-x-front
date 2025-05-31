import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Camera } from '../../models/camera/camera';


@Injectable({
  providedIn: 'root'
})
export class CameraService {

  private apiUrl = 'http://localhost:8086/api/cameras';

  constructor(private http: HttpClient) {}

  getAllCameras(): Observable<Camera[]> {
    return this.http.get<Camera[]>(this.apiUrl);
  }

  getCameraById(idCamera: number): Observable<Camera> {
    return this.http.get<Camera>(`${this.apiUrl}/${idCamera}`);
  }

  addCamera(camera: Camera): Observable<Camera> {
    return this.http.post<Camera>(this.apiUrl, camera, this.httpOptions());
  }

  updateCamera(idCamera: number, camera: Camera): Observable<Camera> {
    return this.http.put<Camera>(`${this.apiUrl}/${idCamera}`, camera, this.httpOptions());
  }

  deleteCamera(idCamera: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idCamera}`);
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}