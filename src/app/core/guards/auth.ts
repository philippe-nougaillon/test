import { inject, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const AuthGuard = () => {
    const router = inject(Router);
    const authService = inject(AuthService);
    if ( !authService.isAuthenticated()) {
        router.navigateByUrl('/login');
        return false;
    }
    return true;
}