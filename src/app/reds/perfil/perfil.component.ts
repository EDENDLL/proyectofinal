import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PerfilService } from './perfil.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})
export default class PerfilComponent implements OnInit {
  profile: any = {
    name: '',
    career: '',
    year: '',
    publicProfile: true,
  };

  constructor(private perfilService: PerfilService) {}

  ngOnInit() {
    // Obtener datos del perfil desde Firestore
    this.perfilService.getProfile().subscribe((data) => {
      if (data) {
        this.profile = data;
      }
    });
  }

  // Guardar cambios del perfil
  saveProfile() {
    this.perfilService.updateProfile(this.profile).subscribe({
      next: () => {
        alert('Perfil actualizado con éxito');
      },
      error: (err) => {
        console.error('Error al actualizar el perfil:', err);
        alert('Hubo un error al actualizar el perfil. Inténtalo de nuevo.');
      },
    });
  }
}
