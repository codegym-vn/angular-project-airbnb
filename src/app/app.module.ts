import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {AppComponent} from './app.component';
import {CustomerComponent} from './customer/customer.component';
import { ViewDetailComponent } from './view-detail/view-detail.component';
import { AppRoutingModule } from './/app-routing.module';
import { BookingHome3Component } from './booking-home3/booking-home3.component';
import { SearchHomeComponent } from './search-home/search-home.component';

@NgModule({
    declarations: [
        AppComponent,
        CustomerComponent,
        ViewDetailComponent,
        BookingHome3Component,
        SearchHomeComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
