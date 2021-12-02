import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TableComponent } from './components/table/table.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from './_helper/auth.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatDialogModule} from '@angular/material/dialog';
import { UserDialogComponent } from './user-dialog/user-dialog.component';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HighlightSearchPipe } from './pipes/highlight-text';
import { InputEmailComponent } from './components/input-email/input-email.component';
import { InputPasswordComponent } from './components/input-password/input-password.component';
const routes: Routes = [
  {
      path        : 'login',
      component: LoginComponent
  },

  {
      path      : '',
      component: DashboardComponent,
      canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    TableComponent,
    UserDialogComponent,
    HighlightSearchPipe,
    InputEmailComponent,
    InputPasswordComponent,
  ],
  entryComponents: [UserDialogComponent],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    FormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatDialogModule,
    MatCardModule,

    RouterModule.forRoot(routes)
  ],
  providers: [HighlightSearchPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
