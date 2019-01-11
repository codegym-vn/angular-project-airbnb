import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { BookingHomeComponent } from './booking-home/booking-home.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        ViewDetailComponent,
        BookingHomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
