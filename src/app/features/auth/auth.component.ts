import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'auth',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
  standalone: true
})
export class AuthComponent {
  showPassword: boolean = false;
  isLoading: boolean = false;
  formLogin: FormGroup;

  private readonly builder: FormBuilder = inject(FormBuilder);

  constructor() {
    this.formLogin = this.builder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      rememberMe: [false, Validators.required]
    })
  }

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

  onSubmit(): void {
    if (this.formLogin.invalid) {
      this.formLogin.markAllAsTouched()
      return
    }
    this.isLoading = true;

    // Simular llamada al backend
    setTimeout(() => {
      console.log('Login:', {
        email: this.getUserName?.value,
        password: this.getPassword?.value,
        rememberMe: this.getRememberMe?.value
      });
      this.isLoading = false;
      // Aquí iría tu lógica de autenticación
    }, 2000);

    if (this.getUserName?.value == "Shak323" && this.getPassword?.value == "3122021535David*") {
      console.log("login completado correctamente ");
    }
  }

  onForgotPassword(): void {
    console.log('Recuperar contraseña');
    // Lógica para recuperar contraseña
  }

  onRegister(): void {
    console.log('Ir a registro');
    // Navegación a página de registro
  }

  get getPassword() {
    return this.formLogin.get('password');
  }

  get getUserName() {
    return this.formLogin.get('userName');
  }

  get getRememberMe() {
    return this.formLogin.get('rememberMe');
  }

}
