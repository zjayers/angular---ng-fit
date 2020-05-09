import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth/';

import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [SignupComponent, LoginComponent],
  imports: [AuthRoutingModule, SharedModule, AngularFireAuthModule],
})
export class AuthModule {}
