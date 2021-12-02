import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UserDialogComponent } from 'src/app/user-dialog/user-dialog.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns: string[] = ['id', 'title', 'body'];
  usersSource: MatTableDataSource<any>;
  filterText:string = "";
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userService: UserService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.userService.getAll().subscribe(users => {

      this.usersSource = new MatTableDataSource(users);
      setTimeout(() => {
        this.usersSource.paginator = this.paginator;
        this.usersSource.sort = this.sort;
      });
  });
  }
  applyFilter() {

    this.usersSource.filter = this.filterText.trim().toLowerCase();

    if (this.usersSource.paginator) {
      this.usersSource.paginator.firstPage();
    }
  }


  public openUserDialog(user){



    let dialogRef = this.dialog.open(UserDialogComponent, {
        data: user.userId,
        panelClass: 'user-dialog',
        hasBackdrop: false,
    });
    dialogRef.afterClosed().subscribe(product => {
      console.log(product);

    });
  }
}
