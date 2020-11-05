import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogLoginComponent } from './component/home/dialog-login/dialog-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(private matDialog: MatDialog) {}
  openDialogLogin() {
    const dialogConfig = new MatDialogConfig();
    this.matDialog.open(DialogLoginComponent, dialogConfig);
  }
  ngOnInit(): void {}
}
