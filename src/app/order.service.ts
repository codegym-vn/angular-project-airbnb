import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Iorder} from './iorder';
import {Observable} from 'rxjs';
import {differenceInDays} from 'date-fns';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    private readonly API_URL = 'http://127.0.0.1:8000/api/order';
    diffDate: number;

    constructor(private http: HttpClient) {
    }

    addOrder(order: Partial<Iorder>): Observable<Iorder> {
        return this.http.post<Iorder>(this.API_URL, order);
    }

    getDiffToDate(checkIn, checkOut: string | number | Date): number {
        checkIn = new Date(checkIn);
        checkOut = new Date(checkOut);

        this.diffDate = differenceInDays(checkOut, checkIn);
        if (this.diffDate < 0) {
            return this.diffDate = 0;
        }
        return this.diffDate + 1;
    }
}
