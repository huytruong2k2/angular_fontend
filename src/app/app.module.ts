import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { CompleteComponent } from './components/complete/complete.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { InfoManagerComponent } from './components/info-manager/info-manager.component';
import { LoginComponent } from './components/login/login.component';
import { style } from '@angular/animations';
import { FormStyle, NgStyle } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    CreateToDoComponent,
    HomeComponent,
    CompleteComponent,
    NavbarComponent,
    FooterComponent,
    RegisterComponent,
    InfoManagerComponent,
    LoginComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgStyle,
    
  
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
