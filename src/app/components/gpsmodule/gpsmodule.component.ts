import { Component, OnDestroy, OnInit } from '@angular/core';
import { GPSModuleService } from '../../services/gpsmodule/gpsmodule.service';

import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { GPSModule } from '../../models/gpsmodule/gpsmodule';

@Component({
  selector: 'app-gpsmodule',
  templateUrl: './gpsmodule.component.html',
  styleUrl: './gpsmodule.component.css',
})
export class GPSModuleComponent implements OnInit, OnDestroy {

  public gpsModules: GPSModule [] = [];
  private subscriptions: Subscription[] = [];
  public showAddForm: boolean = false;

  constructor(private gpsModuleService: GPSModuleService) {}

  ngOnInit(): void {
    this.getGPSModules();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public getGPSModules(): void {
    this.subscriptions.push(
      this.gpsModuleService.getAllGPSModules().subscribe({
        next: (response: GPSModule[]) => this.gpsModules = response,
        error: (error) => console.error('Erreur récupération GPS Modules', error)
      })
    );
  }

  public deleteGPSModule(idGPS?: number): void {
    if (!idGPS) return;
    if (confirm('Voulez-vous supprimer ce module GPS ?')) {
      this.subscriptions.push(
        this.gpsModuleService.deleteGPSModule(idGPS).subscribe(() => {
          this.getGPSModules();
        })
      );
    }
  }

  public onAddNewGPSModule(gpsForm: NgForm): void {
    const newGPSModule: GPSModule = gpsForm.value;
    this.subscriptions.push(
      this.gpsModuleService.addGPSModule(newGPSModule).subscribe({
        next: () => {
          this.getGPSModules();
          this.closeAddForm();
          gpsForm.reset();
        },
        error: (error) => console.error('Erreur ajout module GPS', error)
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