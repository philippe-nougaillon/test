import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class LoginComponent {
    private authService: AuthService = inject(AuthService)
    private toast = inject(ToastService)
    private router = inject(Router)

    login(form: NgForm) {
        if (form.invalid) return
        this.authService.login(form.value).subscribe({
          next: () => {
            this.router.navigateByUrl('/')
          },
          error: (err) => {
            this.toast.error('Identifiants incorrects')
          }
        })
    }
}
    