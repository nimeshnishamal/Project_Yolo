import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { game } from 'src/app/backend/models/game.model';
import { ApiService } from 'src/app/backend/services/api.service';

@Component({
  selector: 'app-details-game',
  templateUrl: './details-game.component.html',
  styleUrls: ['./details-game.component.scss']
})
export class DetailsGameComponent implements OnInit {
  public gameId!: number;
  public gameDetail!: game[];

  constructor(private activateRoute: ActivatedRoute, private api: ApiService){

  }
  ngOnInit(): void {
    this.activateRoute.params.subscribe(val=>{
      this.gameId = val['id'];
      this.fetchGameDetails(this.gameId)
    })
  }

  fetchGameDetails(gameId: number){
    this.api.getRegisteredGameId(gameId)
      .subscribe(res=>{
        this.gameDetail = res;
        console.log(this.gameDetail)
      })
  }
}
