import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import {
  FormGroup,
  FormBuilder,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              public dialogRef: MatDialogRef<LoginDialogComponent>) {

      this.loginForm = this.fb.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const val = this.loginForm.value;

    if (val.email && val.password) {
      this.authService.login(val.email, val.password)
        .subscribe(
          () => {
            console.log('User is logged in');
            this.dialogRef.close();
          });
    }
  }

}
