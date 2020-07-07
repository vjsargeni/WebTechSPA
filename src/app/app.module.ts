import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule,
  MatExpansionModule, MatNativeDateModule, MatDatepickerModule,
  MatTabsModule, MatAutocompleteModule, MatSelectModule, MatSnackBarModule} from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutModule } from '@angular/cdk/layout';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { SignupDialogComponent } from './signup-dialog/signup-dialog.component';
import { RoutesComponent } from './routes/routes.component';
import { BuyComponent } from './buy/buy.component';
import { ProfileComponent } from './profile/profile.component';
import { AuthInterceptor } from './auth.interceptor';
import { MyTripsComponent } from './my-trips/my-trips.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutesComponent,
    MenuComponent,
    MenuComponent,
    LoginDialogComponent,
    SignupDialogComponent,
    BuyComponent,
    ProfileComponent,
    MyTripsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    LayoutModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    SignupDialogComponent
  ]
})
export class AppModule { }
