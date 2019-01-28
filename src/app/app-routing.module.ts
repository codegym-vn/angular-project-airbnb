import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ViewDetailComponent} from './view-detail/view-detail.component';
import {SearchHouseComponent} from './search-house/search-house.component';
import {RegisterComponent} from './customer/register/register.component';

const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'show/:id', component: ViewDetailComponent},
    {path: 'search/:keyword', component: SearchHouseComponent},
    {path: 'register', component: RegisterComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
