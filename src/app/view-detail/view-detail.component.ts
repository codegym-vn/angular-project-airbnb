import {Component, OnInit} from '@angular/core';
import {IHouse} from '../ihouse';
import {HouseService} from '../house.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Iorder} from '../iorder';
import {OrderService} from '../order.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-view-detail',
    templateUrl: './view-detail.component.html',
    styleUrls: ['./view-detail.component.css']
})
export class ViewDetailComponent implements OnInit {
    house: IHouse;
    order: Iorder;
    addOrderForm: FormGroup;

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
            house_id: '',
        });
    }

    onSubmit() {
        const value = this.addOrderForm.value;
        this.orderService.addOrder(value).subscribe(
            data => {
                // this.order.unshift(order);
                this.router.navigateByUrl('order');
            }
        );
        // console.log(this.order.checkIn);
        // console.log(this.order.checkOut);
        // console.log(this.order.house_id);
    }


}
