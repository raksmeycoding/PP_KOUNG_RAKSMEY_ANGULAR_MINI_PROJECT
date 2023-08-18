import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from '../../components/login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { ShareModule } from '../share/share.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const loginRoute: Routes = [
  { path: '', component: LoginComponent }
]



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    ShareModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(loginRoute)
  ]
})
export class LoginModule { }
