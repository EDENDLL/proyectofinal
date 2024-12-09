import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../ui/table/table.component';

@Component({
  selector: 'app-lista-publicaciones',
  standalone: true,
  imports: [RouterLink, TableComponent],
  templateUrl: './lista-publicaciones.component.html',
  styleUrl: './lista-publicaciones.component.css'
})
export default class ListaPublicacionesComponent {

}
