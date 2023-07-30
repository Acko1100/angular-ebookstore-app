import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from "@angular/material/core";
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';





@NgModule
({
    imports: 
    [   MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatCardModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatMenuModule,
        MatTableModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatGridListModule
        
    ],
    exports: 
    [
        MatButtonModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatToolbarModule,
        MatCardModule,
        MatSnackBarModule,
        MatBadgeModule,
        MatMenuModule,
        MatTableModule,
        MatSidenavModule,
        MatExpansionModule,
        MatListModule,
        MatGridListModule

    ]

})

export class MaterialModule {}