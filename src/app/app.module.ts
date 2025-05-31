import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DroneComponent } from './components/drone/drone.component';
import { CameraComponent } from './components/camera/camera.component';
import { FlightControllerComponent } from './components/flightcontroller/flightcontroller.component';
import { GPSModuleComponent } from './components/gpsmodule/gpsmodule.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    DroneComponent,
    CameraComponent,
    FlightControllerComponent,
    GPSModuleComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // ✅ Pour les formulaires (ngModel)
    HttpClientModule // ✅ Pour les requêtes HTTP
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }