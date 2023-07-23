import { NgModule } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MatNativeDateModule } from "@angular/material/core";



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
        MatCardModule

    ]

})

export class MaterialModule {}