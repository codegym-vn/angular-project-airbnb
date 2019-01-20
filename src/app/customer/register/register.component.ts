import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../customer.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;
    message: string;

    constructor(private customerService: CustomerService,
                private formBuilder: FormBuilder,
                private route: ActivatedRoute,
                private router: Router) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: '',
            email: '',
            password: '',
            phone: '',
            address: ''
        });
    }

    onSubmit() {
        const value = this.registerForm.value;
        this.customerService.register(value).subscribe(
            data => {
                this.message = 'Đăng ký thành công';
            }
        );
    }

}
