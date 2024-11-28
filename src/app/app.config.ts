import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"proyectofinalc-57850","appId":"1:991822206397:web:09eee2a0607fcb8aab2ed4","storageBucket":"proyectofinalc-57850.firebasestorage.app","apiKey":"AIzaSyCtic8jBeDMfrzT9eqNu0EGCkWf2uF-Z84","authDomain":"proyectofinalc-57850.firebaseapp.com","messagingSenderId":"991822206397"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
