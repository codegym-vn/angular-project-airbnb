import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {OrderComponent} from './order/order.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'show/:id', component: ViewDetailComponent},
    {path: 'order', component: OrderComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
