import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc, collectionData, deleteDoc, doc } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface Publicacion {
  id?: string;
  titulo: string;
  contenido: string;
  fechaCreacion: Date;
  autorId: string;
}

@Injectable({
  providedIn: 'root',
})
export class PublicacionesService {
  private coleccion = 'publicaciones';

  constructor(private firestore: Firestore) {}

  obtenerPublicaciones(): Observable<Publicacion[]> {
    const publicacionesRef = collection(this.firestore, this.coleccion);
    return collectionData(publicacionesRef, { idField: 'id' }) as Observable<Publicacion[]>;
  }

  crearPublicacion(publicacion: Publicacion): Promise<void> {
    const publicacionesRef = collection(this.firestore, this.coleccion);
    return addDoc(publicacionesRef, publicacion) as Promise<any>;
  }

  eliminarPublicacion(id: string): Promise<void> {
    const docRef = doc(this.firestore, `${this.coleccion}/${id}`);
    return deleteDoc(docRef);
  }
}
