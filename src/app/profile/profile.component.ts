import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  private firstnameControl =  new FormControl('', []);
  private lastnameControl =  new FormControl('', []);
  private emailControl = new FormControl({value: '', disabled: true}, []);
  private oldPasswordControl = new FormControl('', [Validators.required]);
  private passwordControl = new FormControl('', [Validators.required]);
  private password2Control = new FormControl('', [Validators.required]);
  private selectedTabIndex = 0;

  constructor(private http: HttpClient,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/userInfo').subscribe(res => {
      console.log(res);
      this.firstnameControl.setValue(res['firstname']);
      this.lastnameControl.setValue(res['lastname']);
      this.emailControl.setValue(res['email']);
    });
  }

  saveActiveInfo() {
    if (this.selectedTabIndex === 0) {
      this.http.put('http://localhost:3000/api/userInfo', {
        firstname: this.firstnameControl.value,
        lastname: this.lastnameControl.value
      }).subscribe(
        success => {
          this.snackBar.open('Profile information updated', '', { duration: 3000 });
        },
        error => {
          this.snackBar.open('Error updating information. Please try again', '', { duration: 3000 });
        });
    } else if (this.selectedTabIndex === 1) {
      if (this.passwordControl.value === this.password2Control.value) {
        this.http.put('http://localhost:3000/api/auth/updatePassword', {
          password: this.passwordControl.value,
          oldPassword: this.oldPasswordControl.value
        }).subscribe(
          success => {
            this.snackBar.open('Password updated', '', { duration: 3000 });
            this.oldPasswordControl.setValue('');
            this.passwordControl.setValue('');
            this.password2Control.setValue('');
          },
          error => {
            this.snackBar.open('Error updating password. Please check your old password and try again', '', { duration: 3000 });
          });
      } else {
        this.snackBar.open('New passwords do not match', '', { duration: 3000 });
      }
    }
  }

}
