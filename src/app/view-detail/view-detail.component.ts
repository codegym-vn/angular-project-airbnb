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
    // order: Iorder[];
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
        });
    }

    onSubmit() {
        // e.preventDefault();
        // const target = e.target;
        // const checkIn = target.querySelector('#checkIn').value;
        // const checkOut = target.querySelector('#checkOut').value;
        // console.log(checkIn);
        // console.log(checkOut);
        const value = this.addOrderForm.value;
        // const {value} = this.addOrderForm;
        // const data = {...this.addOrderForm, ...value};
        this.orderService.addOrder(value).subscribe(
            order => {
                // this.order.unshift(order);
                this.router.navigateByUrl('order');
            }
        );
    }


}
