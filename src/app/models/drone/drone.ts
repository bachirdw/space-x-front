import { CameraComponent } from "../../components/camera/camera.component";
import { FlightControllerComponent } from "../../components/flightcontroller/flightcontroller.component";
import { GPSModuleComponent } from "../../components/gpsmodule/gpsmodule.component";


export interface Drone {
    idDrone?: number;
    droneId: string;
    modele: string;
    poids: number;
    porteeMax: number;
    capaciteBatterie: number;
    dateAjout?: Date;
    gpsModule?: GPSModuleComponent;
    flightController?: FlightControllerComponent;
    camera?: CameraComponent;
  }