import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { SubmittedComponent } from './submitted/submitted.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    SubmittedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
