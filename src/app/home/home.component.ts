import {Component, OnInit} from '@angular/core';
import {IHouse} from '../ihouse';
import {HouseService} from '../house.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    selector: 'app-customer',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    houses: IHouse[] = [];
    searchForm: FormGroup;

    constructor(private houseService: HouseService,
                private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {
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
        this.houseService.searchHouse(this.searchForm.value.keyword).subscribe(
            data => {
                // this.houseService.getKeywordSearch(this.searchForm.value.keyword);
                this.router.navigate(['/search']);
            }
        );
    }
}
