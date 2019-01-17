import { Component, OnInit } from '@angular/core';
import {Iorder} from '../iorder';
import {OrderService} from '../order.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  order: Iorder[];
  constructor(private orderService: OrderService,
              private router: Router) { }

  ngOnInit() {
  }



}
