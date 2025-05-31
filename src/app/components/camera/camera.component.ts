import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Camera } from '../../models/camera/camera';
import { CameraService } from '../../services/camera/camera.service';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrl: './camera.component.css',
})
export class CameraComponent implements OnInit, OnDestroy {

  public cameras: Camera[] = [];
  private subscriptions: Subscription[] = [];
  public selectedCamera: Camera | null = null;
  public showAddForm: boolean = false;

  constructor(private cameraService: CameraService) {}

  ngOnInit(): void {
    this.getCameras();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  public getCameras(): void {
    this.subscriptions.push(
      this.cameraService.getAllCameras().subscribe({
        next: (response: Camera[]) => this.cameras = response,
        error: (error) => console.error('Erreur récupération caméras', error)
      })
    );
  }

  public deleteCamera(idCamera?: number): void {
    if (!idCamera) return;
    if (confirm('Voulez-vous supprimer cette caméra ?')) {
      this.subscriptions.push(
        this.cameraService.deleteCamera(idCamera).subscribe(() => {
          this.getCameras();
        })
      );
    }
  }

  public onAddNewCamera(cameraForm: NgForm): void {
    const newCamera: Camera = cameraForm.value;
    this.subscriptions.push(
      this.cameraService.addCamera(newCamera).subscribe({
        next: () => {
          this.getCameras();
          this.closeAddForm();
          cameraForm.reset();
        },
        error: (error) => console.error('Erreur ajout caméra', error)
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