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

    constructor(private houseService: HouseService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const keyword = this.route.snapshot.paramMap.get('keyword');
        this.houseService.searchHouse(keyword).subscribe(
            data => {
                this.houses = data;
            }
        );
        this.searchForm = this.formBuilder.group({
            keyword: ''
        });
    }

    searchHouse() {
        this.houseService.searchHouse(this.searchForm.value.keyword).subscribe(
            data => {
                this.houses = data;
            }
        );
    }

}
