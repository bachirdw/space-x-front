import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightController } from '../../models/flightcontroller/flightcontroller';


@Injectable({
  providedIn: 'root'
})
export class FlightControllerService {

  private apiUrl = 'http://localhost:8086/api/flightcontrollers';

  constructor(private http: HttpClient) {}

  getAllFlightControllers(): Observable<FlightController[]> {
    return this.http.get<FlightController[]>(this.apiUrl);
  }

  getFlightControllerById(idFlightController: number): Observable<FlightController> {
    return this.http.get<FlightController>(`${this.apiUrl}/${idFlightController}`);
  }

  addFlightController(flightController: FlightController): Observable<FlightController> {
    return this.http.post<FlightController>(this.apiUrl, flightController, this.httpOptions());
  }

  updateFlightController(idFlightController: number, flightController: FlightController): Observable<FlightController> {
    return this.http.put<FlightController>(`${this.apiUrl}/${idFlightController}`, flightController, this.httpOptions());
  }

  deleteFlightController(idFlightController: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idFlightController}`);
  }

  private httpOptions() {
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
  }
}