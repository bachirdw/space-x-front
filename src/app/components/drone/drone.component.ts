import { Component, OnDestroy, OnInit } from '@angular/core';
import { DroneService } from '../../services/drone/drone.service';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Drone } from '../../models/drone/drone';

@Component({
  selector: 'app-drone',
  templateUrl: './drone.component.html',
  styleUrls: ['./drone.component.css'],
})
export class DroneComponent implements OnInit, OnDestroy {

  public drones: Drone[] = [];
  private subscriptions: Subscription[] = [];
  public showAddForm: boolean = false;

  constructor(private droneService: DroneService) {}

  ngOnInit(): void {
    this.getDrones();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public getDrones(): void {
    this.subscriptions.push(
      this.droneService.getAllDrones().subscribe({
        next: (response: Drone[]) => this.drones = response,
        error: (error) => console.error('Erreur récupération drones', error)
      })
    );
  }

  public deleteDrone(idDrone?: number): void {
    if (!idDrone) return;
    if (confirm('Voulez-vous supprimer ce drone ?')) {
      this.subscriptions.push(
        this.droneService.deleteDrone(idDrone).subscribe(() => {
          this.getDrones();
        })
      );
    }
  }

  public onAddNewDrone(droneForm: NgForm): void {
    const newDrone: Drone = droneForm.value;
    this.subscriptions.push(
      this.droneService.addDrone(newDrone).subscribe({
        next: () => {
          this.getDrones();
          this.closeAddForm();
          droneForm.reset();
        },
        error: (error) => console.error('Erreur ajout drone', error)
      })
    );
  }

  public openAddForm(): void {
    this.showAddForm = true;
  }

  public closeAddForm(): void {
    this.showAddForm = false;
  }
}