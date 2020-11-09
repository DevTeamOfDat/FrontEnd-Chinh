import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SignInComponent } from 'src/app/login/sign-in/sign-in.component';
import { SignUpComponent } from 'src/app/login/sign-up/sign-up.component';

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.css'],
})
export class HeaderAreaComponent {
  constructor(private matDialog: MatDialog) {}
  DialogSignIn() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(SignInComponent, dialogConfig);
  }
  DialogSignUp() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(SignUpComponent, dialogConfig);
  }
}
