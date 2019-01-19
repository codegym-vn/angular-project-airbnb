import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {OrderComponent} from './order/order.component';
import {SearchHouseComponent} from './search-house/search-house.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'show/:id', component: ViewDetailComponent},
    {path: 'order', component: OrderComponent},
    {path: 'search', component: SearchHouseComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
