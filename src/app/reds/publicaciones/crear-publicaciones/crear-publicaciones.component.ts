import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Publicacion, PublicacionesService } from '../../data-access/publicaciones.service';

@Component({
  selector: 'app-crear-publicaciones',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './crear-publicaciones.component.html',
  styleUrl: './crear-publicaciones.component.css'
})
export default class CrearPublicacionesComponent {
  titulo = '';
  contenido = '';

  constructor(private publicacionesService: PublicacionesService) {}

  crearPublicacion() {
    const publicacion: Publicacion = {
      titulo: this.titulo,
      contenido: this.contenido,
      fechaCreacion: new Date(),
      autorId: 'USER_ID', // Reemplaza con el ID del usuario autenticado
    };

    this.publicacionesService.crearPublicacion(publicacion).then(() => {
      this.titulo = '';
      this.contenido = '';
      alert('Publicación creada con éxito');
    });
  }
}
