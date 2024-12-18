import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-grupos',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './grupos.component.html',
  styleUrl: './grupos.component.css'
})
export default class GruposComponent {
 // Lista de grupos
 groups = [
  { name: 'Grupo 1', description: 'Estudio de Matemáticas' },
  { name: 'Grupo 2', description: 'Grupo de Desarrollo de Software' },
];

// Modelo para el formulario
group = { name: '', description: '' };

constructor(private router: Router) {}

// Método para agregar un grupo
onSubmit() {
  if (this.group.name && this.group.description) {
    this.groups.push({ name: this.group.name, description: this.group.description });
    // Limpiar formulario
    this.group = { name: '', description: '' };
    alert('Grupo creado con éxito');
  }
}

// Función para navegar a otra página
navigateToRedPage() {
  this.router.navigate(['/reds']);
}
}
