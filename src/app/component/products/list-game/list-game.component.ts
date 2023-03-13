import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { game } from 'src/app/backend/models/game.model';
import { ApiService } from 'src/app/backend/services/api.service';
import { Router } from '@angular/router';
import { NgConfirmService } from 'ng-confirm-box';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-list-game',
  templateUrl: './list-game.component.html',
  styleUrls: ['./list-game.component.scss']
})
export class ListGameComponent implements OnInit {
  ngOnInit(): void {
    this.getGames();
  }
  public dataSource!: MatTableDataSource<game>;
  public games!: game[];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  displayedColumns: string[] = ['code','name','category','rate','creationDate','description','action']

  constructor(private api: ApiService, private toast: NgToastService, private router: Router, private confirm: NgConfirmService){

  }

  getGames(){
    this.api.getRegisteredGame()
    .subscribe(res=>{
      this.games = res
      this.dataSource = new MatTableDataSource(this.games)
      this,this.dataSource.paginator = this.paginator
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
    this.router.navigate(['products/update', id])
  }

  delete(id: number){
    this.confirm.showConfirm("Are you sure want to delete?", 
    ()=>{
      this.api.deleteRegisteredGame(id)
        .subscribe(res=>{
          this.toast.success({ detail:"Sucess", summary:"Game Deleted Successfully", duration:3000 });
          this.getGames();
    })
    },
    ()=>{

    })
  }
}
