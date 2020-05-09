import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';
import { UiService } from '../../shared/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(private auth: AuthService, private uiService: UiService) {}

  isLoading = false;
  private isLoadingSub: Subscription;

  ngOnInit(): void {
    this.isLoadingSub = this.uiService.loadingStateChanged.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
  }

  ngOnDestroy(): void {
    if (this.isLoadingSub) {
      this.isLoadingSub.unsubscribe();
    }
  }

  onSubmit(form: NgForm) {
    this.auth.login({ email: form.value.email, password: form.value.password });
  }
}
