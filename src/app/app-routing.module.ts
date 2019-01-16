import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
    {path: '', component: CustomerComponent},
    {path: 'show/:id', component: ViewDetailComponent},
    {path: 'order', component: OrderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
