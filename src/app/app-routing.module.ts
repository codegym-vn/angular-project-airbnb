import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerComponent} from './customer/customer.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';

const routes: Routes = [
    {path: 'house', component: CustomerComponent},
    {path: 'house/:id', component: ViewDetailComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
