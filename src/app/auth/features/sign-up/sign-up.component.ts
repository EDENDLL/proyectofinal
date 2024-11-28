import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators} from '@angular/forms'

interface FormSignUp{
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
  
})
export default class SignUpComponent {
  private _formBuilder = inject(FormBuilder);

  form = this._formBuilder.group<FormSignUp>({

    email: this._formBuilder.control('', Validators.required),
    password: this._formBuilder.control('', Validators.required),
  });
}
