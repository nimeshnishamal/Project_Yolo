import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import mongoose from 'mongoose';
import { game } from '../models/game.model';
import { user } from '../models/user.model';
const db = mongoose.connection

@Injectable({
  providedIn: 'root'
})

export class ApiService {

  constructor(private http: HttpClient) { }

  //games APIs

  postRegistrationGame(registerObj: game) {
    return this.http.post<game>('http://localhost:3000/game/addGame', registerObj)
  }

  getRegisteredGame(){
    return this.http.get<game[]>('http://localhost:3000/game/gameList')
  }

  updateRegisteredGame(registerObj: game, id: number){
    return this.http.patch<game>(`http://localhost:3000/game/updateGame/${id}`, registerObj)
  }

  deleteRegisteredGame(id: number){
    return this.http.delete<game>(`http://localhost:3000/game/deleteGame/${id}`)
  }

  getRegisteredGameId(id: number){
    return this.http.get<game[]>(`http://localhost:3000/game/${id}`)
  }


  //user APIs

  postRegistrationUser(registerObj: user) {
    return this.http.post<user>(`http://localhost:3000/user/addUser`, registerObj)
  }

  getRegisteredUser(){
    return this.http.get<user[]>(`http://localhost:3000/user/userList`)
  }

  updateRegisteredUser(registerObj: user, id: number){
    return this.http.patch<user>(`http://localhost:3000/user/updateUser/${id}`, registerObj)
  }

  deleteRegisteredUser(id: number){
    return this.http.delete<user>(`http://localhost:3000/user/deleteUser/${id}`)
  }

  getRegisteredUserId(id: number){
    return this.http.get<user[]>(`http://localhost:3000/user/${id}`)
  }
}
