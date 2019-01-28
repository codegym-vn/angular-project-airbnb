import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {OrderService} from '../../order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orderForm: FormGroup;
  date: number;
  totalPrice: number;
  message: string;
  @Input() house_id;
  @Input() house_price;
  constructor(private orderService: OrderService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.orderForm = this.formBuilder.group({
      checkIn: '',
      checkOut: '',
      totalPrice: '',
      house_id: '',
    });
  }

  onSubmit() {
    this.orderForm.value.house_id = this.house_id;
    this.orderForm.value.totalPrice = this.date * this.house_price;
    const value = this.orderForm.value;
    this.orderService.addOrder(value).subscribe(
        data => {
          this.orderForm.reset();
          this.message = 'Đặt nhà thành công';
        }
    );
  }

  getTotalPrice() {
    this.date = this.orderService.getDiffToDate(this.orderForm.value.checkIn, this.orderForm.value.checkOut);
  }

}
