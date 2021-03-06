import { NgModule } from '@angular/core';
import { ReservationComponent } from '../component/reservation.component';
import { NouvelleReservationComponent } from '../component/nouvelleReservation.component';
import { GlobalModule } from '../../common/module-common/module.common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColorPickerModule } from 'ngx-color-picker';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { AsideModule } from '../../aside/aside-module/aside-module.module';
import { ReservationRoute } from '../route/reservation.route';

@NgModule({
    imports : [
        GlobalModule,
        ReservationRoute,
        AsideModule,
        ColorPickerModule,
        NgbModule.forRoot()
    ],
    declarations : [
        NouvelleReservationComponent
    ],
    exports : [
       NouvelleReservationComponent
    ],
})
export class ReservationModule { }