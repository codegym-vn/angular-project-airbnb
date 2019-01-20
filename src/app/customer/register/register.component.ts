import {Component, OnInit} from '@angular/core';
import {CustomerService} from '../../customer.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
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
                private router: Router) {
    }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            phone: ['', [Validators.required]],
            address: ['', [Validators.required]]
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
