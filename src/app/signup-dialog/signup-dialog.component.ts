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
  selector: 'app-signup-dialog',
  templateUrl: './signup-dialog.component.html',
  styleUrls: ['./signup-dialog.component.css']
})
export class SignupDialogComponent implements OnInit {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder,
              private authService: AuthService,
              private router: Router,
              public dialogRef: MatDialogRef<SignupDialogComponent>) {

      this.signupForm = this.fb.group({
          firstname: ['', Validators.required],
          lastname: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          password2: ['', Validators.required]
      });
  }

  ngOnInit() {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    const val = this.signupForm.value;

    if (val.firstname && val.lastname && val.email && val.password && (val.password === val.password2)) {
      this.authService.signup(val.firstname, val.lastname, val.email, val.password)
        .subscribe(
          () => {
            console.log('User is signed up');
            this.dialogRef.close();
          });
    }
  }

}
