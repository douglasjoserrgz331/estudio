import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ActualizarComponent } from "./actualizar/actualizar.component";
import { ConsultarComponent } from './consultar/consultar.component';
import { IncluirComponent } from './incluir/incluir.component';
import { AnularComponent } from './anular/anular.component';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ActualizarComponent,ConsultarComponent,IncluirComponent,AnularComponent]
})
export class AppComponent {
  title = 'tasasinteres';
}
