import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SideMenuComponent} from '../components/elements/side-menu/side-menu.component';
import {HeaderComponent} from '../components/elements/header/header.component';
import {FooterComponent} from '../components/elements/footer/footer.component';
import {MatButtonToggleModule} from '@angular/material';
import {RouterModule} from '@angular/router';


@NgModule({
    declarations: [
        SideMenuComponent,
        HeaderComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MatButtonToggleModule,
    ],
    exports: [
        SideMenuComponent,
        HeaderComponent,
        FooterComponent,
        RouterModule
    ]
})
export class ElementsModule {
}
