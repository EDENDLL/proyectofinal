import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { switchMap, take } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PerfilService {
  constructor(private firestore: AngularFirestore, private auth: AngularFireAuth) {}

  // Obtener datos del perfil del usuario actual
  getProfile(): Observable<any> {
    return this.auth.user.pipe(
      switchMap((user) => {
        if (user && user.uid) {
          return this.firestore.collection('users').doc(user.uid).valueChanges();
        }
        return of(null); // Si no hay usuario, devuelve null
      })
    );
  }

  // Actualizar datos del perfil del usuario actual
  updateProfile(data: any) {
    return this.auth.user.pipe(
      take(1), // Toma solo un valor y completa el observable
      switchMap((user) => {
        if (user && user.uid) {
          return this.firestore.collection('users').doc(user.uid).update(data);
        } else {
          throw new Error('El usuario no está autenticado.');
        }
      })
    );
  }
}
