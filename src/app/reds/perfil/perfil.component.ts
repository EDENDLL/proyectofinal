import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './perfil.component.html',
  styleUrl: './perfil.component.css'
})

export default class PerfilComponent{
  profileForm: FormGroup;
  userId: string | null = null;
  private _router: any;

  constructor(
    private fb: FormBuilder,
    private firestore: Firestore,
    private auth: Auth
  ) {
    this.profileForm = this.fb.group({
      name: [''],
      career: [''],
      year: [''],
      publicProfile: [false],
    });

    // Obtener el ID del usuario autenticado
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.userId = user.uid;
      }
    });
  }

  async saveProfile() {
    if (!this.userId) {
      alert('No hay usuario autenticado.');
      return;
    }

    const formValue = this.profileForm.value;

    try {
      // Guardar el perfil en Firestore con el ID del usuario
      const userDoc = doc(this.firestore, `users/${this.userId}`);
      await setDoc(userDoc, {
        name: formValue.name,
        career: formValue.career,
        year: formValue.year,
        publicProfile: formValue.publicProfile,
      });

      alert('Perfil guardado exitosamente.');
      
    } catch (error) {
      console.error('Error al guardar el perfil: ', error);
    }
    
  }
}