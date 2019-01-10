import {Component, OnInit} from '@angular/core';
import {IHouse} from '../ihouse';
import {HouseService} from '../house.service';

@Component({
    selector: 'app-customer',
    templateUrl: './customer.component.html',
    styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
    houses: IHouse[] = [];

    constructor(private houseService: HouseService) {
    }

    ngOnInit() {
        this.getHouses();
    }

    getHouses() {
        return this.houseService.getHouses().subscribe(
            data => {
                this.houses = data;
            });
    }

}
