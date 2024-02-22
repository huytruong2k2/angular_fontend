import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateToDoComponent } from './components/create-to-do/create-to-do.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';
import { CompleteComponent } from './components/complete/complete.component';
import { AppComponent } from './app.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { InfoManagerComponent } from './components/info-manager/info-manager.component';

const routes: Routes = [
  { path: 'Create', component: CreateToDoComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'Complete', component: CompleteComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Info', component: InfoManagerComponent },
  { path: '', redirectTo: '/Home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
