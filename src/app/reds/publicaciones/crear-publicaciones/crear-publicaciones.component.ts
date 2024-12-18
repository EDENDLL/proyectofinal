import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Publicacion } from '../../data-access/publicaciones.service';
import { PublicacionesService } from '../../data-access/publicaciones.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';

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

  constructor(
    private publicacionesService: PublicacionesService,
    ) {}

  crearPublicacion() {
    const publicacion: Publicacion = {
      titulo: this.titulo,
      contenido: this.contenido,
      fechaCreacion: new Date(),
      autorId: 'ID_USUARIO', // Reemplaza con el ID del usuario autenticado
    };

    this.publicacionesService.crearPublicacion(publicacion).then(() => {
      this.titulo = '';
      this.contenido = '';
      alert('Publicación creada con éxito');
    });
  }
}
