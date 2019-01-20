import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Icustomer} from './icustomer';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CustomerService {
    private readonly API_URL = 'http://127.0.0.1:8000/api/customer';

    constructor(private http: HttpClient) {
    }

    register(customer: Partial<Icustomer>): Observable<Icustomer> {
        return this.http.post<Icustomer>(this.API_URL, customer);
    }
}
