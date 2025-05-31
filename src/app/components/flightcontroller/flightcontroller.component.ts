import { Component, OnDestroy, OnInit } from '@angular/core';
import { FlightControllerService } from '../../services/flightcontroller/flightcontroller.service';
import { FlightController } from '../../models/flightcontroller/flightcontroller';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-flightcontroller',
  templateUrl: './flightcontroller.component.html',
  styleUrl: './flightcontroller.component.css',
})
export class FlightControllerComponent implements OnInit, OnDestroy {

  public flightControllers: FlightController[] = [];
  private subscriptions: Subscription[] = [];
  public showAddForm: boolean = false;

  constructor(private flightControllerService: FlightControllerService) {}

  ngOnInit(): void {
    this.getFlightControllers();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public getFlightControllers(): void {
    this.subscriptions.push(
      this.flightControllerService.getAllFlightControllers().subscribe({
        next: (response: FlightController[]) => this.flightControllers = response,
        error: (error) => console.error('Erreur récupération Flight Controllers', error)
      })
    );
  }

  public deleteFlightController(idFlightController?: number): void {
    if (!idFlightController) return;
    if (confirm('Voulez-vous supprimer ce contrôleur de vol ?')) {
      this.subscriptions.push(
        this.flightControllerService.deleteFlightController(idFlightController).subscribe(() => {
          this.getFlightControllers();
        })
      );
    }
  }

  public onAddNewFlightController(flightForm: NgForm): void {
    const newFlightController: FlightController = flightForm.value;
    this.subscriptions.push(
      this.flightControllerService.addFlightController(newFlightController).subscribe({
        next: () => {
          this.getFlightControllers();
          this.closeAddForm();
          flightForm.reset();
        },
        error: (error) => console.error('Erreur ajout contrôleur de vol', error)
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