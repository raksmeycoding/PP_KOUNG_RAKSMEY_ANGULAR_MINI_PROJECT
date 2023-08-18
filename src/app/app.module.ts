import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api'
import { DataService } from './services/data.service';
import { StoreModule } from '@ngrx/store';
import { movieReducer } from './state/movie.reducer';
import { EmailValidatorDirective } from './directives/email-validator.directive';





@NgModule({
  declarations: [
    AppComponent,
    EmailValidatorDirective,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(DataService),
    StoreModule.forRoot({ movies: movieReducer })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
