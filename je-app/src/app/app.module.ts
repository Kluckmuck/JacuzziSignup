import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';

import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { SubmittedComponent } from './submitted/submitted.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    SubmittedComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  exports: [
    MatDatepickerModule
  ],
  providers: [
    DatePipe
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
