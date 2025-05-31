import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DroneComponent } from './components/drone/drone.component';
import { CameraComponent } from './components/camera/camera.component';
import { FlightControllerComponent } from './components/flightcontroller/flightcontroller.component';
import { GPSModuleComponent } from './components/gpsmodule/gpsmodule.component';

const routes: Routes = [
  { path: '', redirectTo: 'drone', pathMatch: 'full' },
  { path: 'drone', component: DroneComponent },
  { path: 'camera', component: CameraComponent },
  { path: 'flightcontroller', component: FlightControllerComponent },
  { path: 'gpsmodule', component: GPSModuleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }