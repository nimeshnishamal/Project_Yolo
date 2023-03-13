import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { json } from 'express';
import { NgToastService } from 'ng-angular-popup';
import { game } from 'src/app/backend/models/game.model';
import { ApiService } from 'src/app/backend/services/api.service';

@Component({
  selector: 'app-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.scss']
})
export class AddGameComponent implements OnInit{
public packages = ["Sports","Action-adventure","Shooter","Puzzlers","party games","RTS","Other"];
public registerForm!: FormGroup;
public userIdToUpdate!: number;
public isUpdateActive: boolean = false;
constructor(private fb: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService, private toastService: NgToastService){
  
}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      gameCode: [''],
      gameName: [''],
      gameCategory: [''],
      gameRate: [''],
      gameDescription: [''],
      isUnauthorized: [''],
      isSuitable: [''],
      creationDate: ['']
    });

    this.activatedRoute.params.subscribe(val=>{
      this.userIdToUpdate = val['id'];
      this.api.getRegisteredGameId(this.userIdToUpdate)
      .subscribe(res=>{
        this.isUpdateActive = true;
        this.fillFormToUpdate(res)
      })
    })
  }
  submit(){
    this.api.postRegistrationGame(this.registerForm.value)
    .subscribe(res=>{
      this.toastService.success({ detail:"Sucess", summary:"Game added", duration:3000 });
      this.registerForm.reset();
    })
  }
  update(){
    this.api.updateRegisteredGame(this.registerForm.value, this.userIdToUpdate)
    .subscribe(res=>{
      this.toastService.success({ detail:"Sucess", summary:"Game updated", duration:3000 });
      this.registerForm.reset();
      this.router.navigate(['products'])
    })
  }
  fillFormToUpdate(games: game[]){
    const game = games[0]
    this.registerForm.setValue({
      gameCode: game.gameCode,
      gameName: game.gameName,
      gameCategory: game.gameCategory,
      gameRate: game.gameRate,
      gameDescription: game.gameDescription,
      isUnauthorized: game.isUnauthorized,
      isSuitable: game.isSuitable,
      creationDate: game.creationDate
    })
  }
}
