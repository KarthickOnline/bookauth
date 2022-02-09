import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';
import { BookService } from './services/book.service';
import { RegisterComponent } from './auth/register/register.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';
import { CompComponent } from './comp/comp.component';

@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    RegisterComponent,
    LoginComponent,
    CompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [BookService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
