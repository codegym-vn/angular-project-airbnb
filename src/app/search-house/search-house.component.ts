import {Component, OnInit} from '@angular/core';
import {HouseService} from '../house.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IHouse} from '../ihouse';
import {HomeComponent} from '../home/home.component';

@Component({
    selector: 'app-search-house',
    templateUrl: './search-house.component.html',
    styleUrls: ['./search-house.component.css']
})
export class SearchHouseComponent implements OnInit {
    houses: IHouse[] = [];
    searchForm: FormGroup;
    keyword: string;

    constructor(private houseService: HouseService,
                private formBuilder: FormBuilder,
                private homeComponent: HomeComponent) {
    }

    ngOnInit() {
        this.searchHouse();
        this.getHouses();
        this.searchForm = this.formBuilder.group({
            keyword: ''
        });
    }

    getHouses() {
        return this.houseService.getHouses().subscribe(
            data => {
                this.houses = data;
            });
    }

    searchHouse() {
        this.keyword = this.homeComponent.getKeywordSearch();
        this.houseService.searchHouse(this.keyword).subscribe(
            data => {
                this.houses = data;
            }
        );
    }

}
