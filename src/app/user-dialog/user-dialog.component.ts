import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-dialog',
  templateUrl: './user-dialog.component.html',
  styleUrls: ['./user-dialog.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class UserDialogComponent implements OnInit {
  userInfo: any;
  constructor( private userService: UserService, public dialogRef: MatDialogRef<UserDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.userService.getById(this.data).subscribe(users => {

      this.userInfo = users
    });
  }

  public close(): void {
    this.dialogRef.close();
  }
}
