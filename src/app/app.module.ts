import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { NO_ERRORS_SCHEMA } from '@angular/core';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // If You need animations

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
// import { NgxCarouselModule } from 'ngx-carousel';
// import 'hammerjs';
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // NgxCarouselModule
    // BrowserAnimationsModule,
    // NgbModule
    // MdbCarouselModule,
    
//     MDBBootstrapModule.forRoot(),
// BrowserAnimationsModule,
    // MdbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
