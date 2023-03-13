import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { NgConfirmService } from 'ng-confirm-box';
import { user } from 'src/app/backend/models/user.model';
import { ApiService } from 'src/app/backend/services/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  ngOnInit(): void {
    this.getUsers();
  }
  public dataSource!: MatTableDataSource<user>;
  public users!: user[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['Code','Name','Email','Tel','Description','Action']

  constructor(private api: ApiService,  private toast: NgToastService, private router: Router, private confirm: NgConfirmService){

  }

  getUsers(){
    this.api.getRegisteredUser()
    .subscribe(res=>{
      this.users = res
      this.dataSource = new MatTableDataSource(this.users)
      this.dataSource.paginator = this.paginator
      this.dataSource.sort = this.sort
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  edit(id: number){
    this.router.navigate(['users/update', id])
  }

  delete(id: number){
    this.confirm.showConfirm("Are you sure want to delete?", 
    ()=>{
      this.api.deleteRegisteredUser(id)
        .subscribe(res=>{
          this.toast.success({ detail:"Sucess", summary:"Game Deleted Successfully", duration:3000 });
          this.getUsers();
    })
    },
    ()=>{

    })
  }
}
