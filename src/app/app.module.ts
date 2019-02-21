import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerComponent} from './customer/customer.component';
import {SearchHouseComponent} from './search-house/search-house.component';
import { RegisterComponent } from './customer/register/register.component';
import {OrderComponent} from './view-detail/order/order.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './customer/login/login.component';
import { ProfileComponent } from './customer/profile/profile.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ViewDetailComponent,
        OrderComponent,
        CustomerComponent,
        SearchHouseComponent,
        RegisterComponent,
        NavbarComponent,
        FooterComponent,
        LoginComponent,
        ProfileComponent,
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
