import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Drone } from '../../models/drone/drone';

@Injectable({
  providedIn: 'root'
})
export class DroneService {

  private apiUrl = 'http://localhost:8086/api/drones';

  constructor(private http: HttpClient) {}

  // Récupérer tous les drones
  getAllDrones(): Observable<Drone[]> {
    return this.http.get<Drone[]>(this.apiUrl);
  }

  // Récupérer un drone par ID
  getDroneById(idDrone: number): Observable<Drone> {
    return this.http.get<Drone>(`${this.apiUrl}/${idDrone}`);
  }

  // Ajouter un drone
  addDrone(drone: Drone): Observable<Drone> {
    return this.http.post<Drone>(this.apiUrl, drone, this.httpOptions());
  }

  // Mettre à jour un drone
  updateDrone(idDrone: number, drone: Drone): Observable<Drone> {
    return this.http.put<Drone>(`${this.apiUrl}/${idDrone}`, drone, this.httpOptions());
  }

  // Supprimer un drone
  deleteDrone(idDrone: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${idDrone}`);
  }

  // Options HTTP (headers)
  private httpOptions() {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
  }
}