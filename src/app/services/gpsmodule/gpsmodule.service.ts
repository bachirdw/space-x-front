import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GPSModuleComponent } from '../../components/gpsmodule/gpsmodule.component';
import { GPSModule } from '../../models/gpsmodule/gpsmodule';

@Injectable({
  providedIn: 'root'
})
export class GPSModuleService {

  private apiUrl = 'http://localhost:8086/api/gpsmodules';

  constructor(private http: HttpClient) {}

  getAllGPSModules(): Observable<GPSModule[]> {
    return this.http.get<GPSModule[]>(this.apiUrl);
  }

  getGPSModuleById(idGPS: number): Observable<GPSModule> {
    return this.http.get<GPSModule>(`${this.apiUrl}/${idGPS}`);
  }

  addGPSModule(gpsModule: GPSModule): Observable<GPSModule> {
    return this.http.post<GPSModule>(this.apiUrl, gpsModule, this.httpOptions());
  }

  updateGPSModule(idGPS: number, gpsModule: GPSModule): Observable<GPSModule> {
    return this.http.put<GPSModule>(`${this.apiUrl}/${idGPS}`, gpsModule, this.httpOptions());
  }

  deleteGPSModule(idGPS: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idGPS}`);
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}