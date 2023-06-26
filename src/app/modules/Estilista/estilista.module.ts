import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstilistaComponent } from './estilista.component';
import {EstilistaRoutingModule} from "./estilista-routing.module";
import { CitasEstilistaComponent } from './components/citas-estilista/citas-estilista.component';
import { MenuLateralEstilistaComponent } from './components/menu-lateral-estilista/menu-lateral-estilista.component';
import { RecordatoriosEstilistaComponent } from './components/recordatorios-estilista/recordatorios-estilista.component';
import { ContainerCentralEstilistaComponent } from './components/container-central-estilista/container-central-estilista.component';
import { MapaDisponibilidadesComponent } from './components/mapa-disponibilidades/mapa-disponibilidades.component';
import { ProximasCitasComponent } from './components/proximas-citas/proximas-citas.component';
import { CardCitaComponent } from './components/card-cita/card-cita.component';
import { ModalNuevaCitaComponent } from './components/modal-nueva-cita/modal-nueva-cita.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";




@NgModule({
  declarations: [
    EstilistaComponent,
    CitasEstilistaComponent,
    MenuLateralEstilistaComponent,
    RecordatoriosEstilistaComponent,
    ContainerCentralEstilistaComponent,
    MapaDisponibilidadesComponent,
    ProximasCitasComponent,
    CardCitaComponent,
    ModalNuevaCitaComponent,

  ],
    imports: [
        CommonModule,
        EstilistaRoutingModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class EstilistaModule { }
