import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {BookingHome3Component} from './booking-home3/booking-home3.component';
import {SignupComponent} from './signup/signup.component';
import {SigninComponent} from './signin/signin.component';
import {AuthService} from './auth.service';
import {FormsModule} from '@angular/forms';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        ViewDetailComponent,
        BookingHome3Component,
        SignupComponent,
        SigninComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule
    ],
    providers: [AuthService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
