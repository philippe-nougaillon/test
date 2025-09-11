import { HttpClient } from "@angular/common/http";
import { Injectable, inject, signal } from "@angular/core";
import { API_URL } from "../../app.config";
import { Observable, tap } from "rxjs";

type AuthReponse = {
    token: string;
}

interface AuthPayload {
    email: string;
    password: string;
    remember: boolean;
}

const TOKEN_KEY = 'angular-testapp-token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
   private http = inject(HttpClient);
   private readonly apiUrl = inject(API_URL);
   token = signal(''); 

    constructor() {
        this.token.set(localStorage.getItem(TOKEN_KEY) ?? '');
    }

    login({ email, password, remember }: AuthPayload): Observable<AuthReponse> {
        const username = email.split('@')[0];
        return this.http.post<AuthReponse>(this.apiUrl + '/auth/login', {username, password })
                    .pipe(tap((response) => {
                        const token = response.token;
                        this.token.set(token);
                        if (remember) {
                            localStorage.setItem(TOKEN_KEY, token);
                        }
                    }))
        }
        
   isAuthenticated(): boolean {
        return !!this.token;
    } 
}