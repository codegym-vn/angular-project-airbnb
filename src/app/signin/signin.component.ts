import {Component, OnInit} from '@angular/core';
import {AuthService} from '../auth.service';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    onSignin(form: NgForm) {
        this.authService.signin(form.value.name, form.value.password, form.value.email)
            .subscribe(
                decodedToken => console.log(decodedToken),
                error => console.log(error),
            );
    }
}
