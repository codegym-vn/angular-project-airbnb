import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {OrderComponent} from './order/order.component';
import {AppRoutingModule} from './app-routing.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CustomerComponent} from './customer/customer.component';
import {SearchHouseComponent} from './search-house/search-house.component';
import { RegisterComponent } from './customer/register/register.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ViewDetailComponent,
        OrderComponent,
        CustomerComponent,
        SearchHouseComponent,
        RegisterComponent,
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
