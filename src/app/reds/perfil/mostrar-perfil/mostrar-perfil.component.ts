import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { doc, Firestore, getDoc } from '@angular/fire/firestore';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-mostrar-perfil',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './mostrar-perfil.component.html',
  styleUrl: './mostrar-perfil.component.css'
})
export default class MostrarPerfilComponent {
  userId: string | null = null;
  profileData: any = null;

  constructor(private firestore: Firestore, private auth: Auth) {}

  ngOnInit() {
    onAuthStateChanged(this.auth, async (user) => {
      if (user) {
        this.userId = user.uid;
        await this.fetchProfile();
      } else {
        this.userId = null;
        this.profileData = null;
      }
    });
  }

  async fetchProfile() {
    if (!this.userId) return;

    const userDocRef = doc(this.firestore, `users/${this.userId}`);
    const docSnap = await getDoc(userDocRef);

    if (docSnap.exists()) {
      this.profileData = docSnap.data();
    } else {
      console.log('No se encontró el perfil.');
    }
  }
}
