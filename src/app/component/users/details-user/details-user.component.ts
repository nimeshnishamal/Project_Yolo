import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { user } from 'src/app/backend/models/user.model';
import { ApiService } from 'src/app/backend/services/api.service';

@Component({
  selector: 'app-details-user',
  templateUrl: './details-user.component.html',
  styleUrls: ['./details-user.component.scss']
})
export class DetailsUserComponent implements OnInit {
  public userId!: number;
  public userDetail!: user[];

  constructor(private activateRoute: ActivatedRoute, private api: ApiService){

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(val=>{
      this.userId = val['id'];
      this.fetchUserDetails(this.userId)
    })
  }

  fetchUserDetails(userId: number){
    this.api.getRegisteredUserId(userId)
      .subscribe(res=>{
        this.userDetail = res;
      })
  }
}
