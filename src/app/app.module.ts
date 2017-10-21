import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Component } from '@angular/core';
import { DataSource } from '@angular/cdk/collections';
import { Observable } from 'rxjs/Observable';
import { TableBasicExample } from './table-basic-example';

import 'rxjs/add/observable/of';
import { MatCardModule,MatOptionModule,MatButtonModule,MatSelectModule,MatToolbarModule,MatIconModule,MatInputModule,
         MatSidenavModule,MatMenuModule,MatListModule,MatTableModule,MatExpansionModule } from '@angular/material';
import 'hammerjs';

/**
 * @title Basic table
 */


@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatOptionModule,
    MatButtonModule,
    MatSelectModule,
    MatToolbarModule,
    MatIconModule,
    MatInputModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatTableModule,
    MatExpansionModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})




export class AppModule {



 }










 





