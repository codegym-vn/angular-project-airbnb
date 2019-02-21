import {Component, OnInit} from '@angular/core';
import {HouseService} from '../house.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IHouse} from '../ihouse';
import {ActivatedRoute} from '@angular/router';

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
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.keyword = this.route.snapshot.paramMap.get('keyword');
        this.houseService.searchHouse(this.keyword).subscribe(
            data => {
                this.houses = data;
            }
        );
        this.searchForm = this.formBuilder.group({
            keyword: ''
        });
    }

    searchHouse() {
        this.keyword = this.searchForm.value.keyword;
        this.houseService.searchHouse(this.keyword).subscribe(
            data => {
                this.houses = data;
            }
        );
    }

}
