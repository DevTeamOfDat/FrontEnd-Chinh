import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogLoginComponent } from '../dialog-login/dialog-login.component';

@Component({
  selector: 'app-header-area',
  templateUrl: './header-area.component.html',
  styleUrls: ['./header-area.component.css'],
})
export class HeaderAreaComponent {
  constructor(private matDialog: MatDialog) {}
  DialogLogin() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogLoginComponent, dialogConfig);
  }
}
