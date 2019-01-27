import {Component, OnInit} from '@angular/core';
import {IHouse} from '../ihouse';
import {HouseService} from '../house.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-view-detail',
    templateUrl: './view-detail.component.html',
    styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
    house: IHouse;

    constructor(private houseService: HouseService,
                private activeRoute: ActivatedRoute) {
    }

    ngOnInit() {
        const id = +this.activeRoute.snapshot.paramMap.get('id');
        this.houseService.getHouseById(id).subscribe(
            data => {
                this.house = data;
            }
        );
    }
}
