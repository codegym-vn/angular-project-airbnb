import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { OrderComponent } from './order/order.component';
import {AppRoutingModule} from './app-routing.module';
import {ReactiveFormsModule} from '@angular/forms';
import { CustomerComponent } from './customer/customer.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        ViewDetailComponent,
        OrderComponent,
        CustomerComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
