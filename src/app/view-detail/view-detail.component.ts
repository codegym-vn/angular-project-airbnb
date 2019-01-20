import {Component, OnInit} from '@angular/core';
import {IHouse} from '../ihouse';
import {HouseService} from '../house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderService} from '../order.service';

@Component({
    selector: 'app-view-detail',
    templateUrl: './view-detail.component.html',
    styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
    house: IHouse;
    addOrderForm: FormGroup;
    date: number;
    totalPrice: number;
    message: string;

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
            house_id: id,
        });
    }

    onSubmit() {
        this.addOrderForm.value.totalPrice = this.date * this.house.price;
        const value = this.addOrderForm.value;
        this.orderService.addOrder(value).subscribe(
            data => {
                // this.router.navigate(['order']);
                this.message = 'Đặt nhà thành công';
            }
        );
    }

    getTotalPrice() {
        this.date = this.orderService.getDiffToDate(this.addOrderForm.value.checkIn, this.addOrderForm.value.checkOut);
    }


}
