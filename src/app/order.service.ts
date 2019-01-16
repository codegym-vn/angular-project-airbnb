import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iorder} from './iorder';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private readonly API_URL = 'http://127.0.0.1:8000/api/order';

    constructor(private http: HttpClient) {
    }

    addOrder(order: Partial<Iorder>): Observable<Iorder> {
        return this.http.post<Iorder>(this.API_URL, order);
    }
}
