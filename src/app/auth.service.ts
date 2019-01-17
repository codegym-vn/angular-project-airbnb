import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {

    }

    signup(name: string, password: string, email: string, phone: number, address: string) {
        return this.http.post('http://localhost:8000/api/customer',
            {name: name, email: email, password: password, phone: phone, address: address}
        );
    }

    signin(password: string, email: string) {
        return this.http.post('http://localhost:8000/api/login',
            {email: email, password: password})
            .map(
                (response: Response) => {
                    const token = response.json().token;
                    const base64Url = token.split('.')[1];
                    const base64 = base64Url.replace('-', '+').replace('_', '/');
                    return {
                        token: token, decoded: JSON.parse(window.atob(base64))
                    };
                }
            )
            .do(
                tokenData => {
                    localStorage.setItem('token', tokenData.token);
                }
            );

    }
}
