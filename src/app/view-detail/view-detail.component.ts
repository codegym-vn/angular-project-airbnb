import {Component, OnInit} from '@angular/core';
import {IHouse} from '../ihouse';
import {HouseService} from '../house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iorder} from '../iorder';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderService} from '../order.service';

@Component({
    selector: 'app-view-detail',
    templateUrl: './view-detail.component.html',
    styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
    house: IHouse;
    order: Iorder;
    addOrderForm: FormGroup;
    checkIn: string;
    checkOut: string;
    totalPrice: number;

    constructor(private houseService: HouseService,
                private activeRoute: ActivatedRoute,
                private orderService: OrderService,
                private router: Router,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        const id = +this.activeRoute.snapshot.paramMap.get('id');
        this.houseService.getHouseById(id).subscribe(
            data => {
                this.house = data;
            }
        );
        this.addOrderForm = this.formBuilder.group({
            checkIn: '',
            checkOut: '',
            totalPrice: '',
            house_id: '',
        });
    }

    onSubmit() {
        const value = this.addOrderForm.value;
        this.orderService.addOrder(value).subscribe(
            data => {
                this.router.navigateByUrl('order');
            }
        );
    }

    getTotalPrice() {
        this.totalPrice = this.orderService.getDiffToDate(this.checkIn, this.checkOut);
    }


}
