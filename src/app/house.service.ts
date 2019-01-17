import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {IHouse} from './ihouse';

@Injectable({
    providedIn: 'root'
})
export class HouseService {
    private readonly API_URL = 'http://127.0.0.1:8000/api/house';

    constructor(private http: HttpClient) {
    }

    getHouses(): Observable<IHouse[]> {
        return this.http.get<IHouse[]>(this.API_URL);
    }

    getHouseById(id: number): Observable<IHouse> {
        return this.http.get<IHouse>(`${this.API_URL}/${id}`);
    }

    searchHouse(): Observable<IHouse[]> {
        return this.http.get<IHouse[]>(this.API_URL + '/search');
    }
}
