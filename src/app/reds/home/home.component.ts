import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { AuthStateService } from '../../shared/data-access/auth-state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export default class HomeComponent {

  private _authState = inject(AuthStateService);
  private _router = inject(Router);

  async logOut() {
    await this._authState.logOut();
    this._router.navigateByUrl('/auth/sign-in');
  }
}
