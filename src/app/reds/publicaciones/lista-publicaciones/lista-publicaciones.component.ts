import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TableComponent } from '../../ui/table/table.component';
import { Publicacion } from '../../data-access/publicaciones.service';
import { PublicacionesService } from '../../data-access/publicaciones.service';
import { CommonModule } from '@angular/common';
import CrearPublicacionesComponent from '../crear-publicaciones/crear-publicaciones.component';
import MostrarPerfilComponent from '../../perfil/mostrar-perfil/mostrar-perfil.component';

@Component({
  selector: 'app-lista-publicaciones',
  standalone: true,
  imports: [RouterLink, TableComponent, CommonModule, CrearPublicacionesComponent, MostrarPerfilComponent],
  templateUrl: './lista-publicaciones.component.html',
  styleUrl: './lista-publicaciones.component.css'
})

export default class ListaPublicacionesComponent implements OnInit{
  publicaciones: Publicacion[] = [];

  constructor(private publicacionesService: PublicacionesService) {}

  ngOnInit() {
    this.publicacionesService.obtenerPublicaciones().subscribe(data => {
      this.publicaciones = data;
    });
    
  }

  eliminarPublicacion(id: string) {
    this.publicacionesService.eliminarPublicacion(id).then(() => {
      alert('Publicación eliminada');
    });
  }
}
