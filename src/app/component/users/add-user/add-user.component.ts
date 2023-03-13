import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import { user } from 'src/app/backend/models/user.model';
import { ApiService } from 'src/app/backend/services/api.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit{
  public registerForm!: FormGroup;
  public userIdToUpdate!: number;
  public isUpdateActive: boolean = false;
  constructor(private fb: FormBuilder,private router: Router, private activatedRoute: ActivatedRoute, private api: ApiService, private toastService: NgToastService){
    
}
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      userCode: [''],
      userFullName: [''],
      userEmail: [''],
      userTel: [''],
      userDescription: [''],
      isUserHavePreviousExperenceInYolo: [''],
      isUserEstonianCitizen: [''],
      userBOD: ['']
    });
  
    this.activatedRoute.params.subscribe(val=>{
      this.userIdToUpdate = val['id'];
      console.log('userIdToUpdate',this.userIdToUpdate)
      this.api.getRegisteredUserId(this.userIdToUpdate)
      .subscribe(res=>{
          this.isUpdateActive = true;
          this.fillFormToUpdate(res)
      })
    })
  }
  submit(){
    this.api.postRegistrationUser(this.registerForm.value)
    .subscribe(res=>{
      this.toastService.success({ detail:"Sucess", summary:"User added", duration:3000 });
      this.registerForm.reset();
    })
  }
  update(){
    this.api.updateRegisteredUser(this.registerForm.value, this.userIdToUpdate)
    .subscribe(res=>{
      this.toastService.success({ detail:"Sucess", summary:"User updated", duration:3000 });
      this.registerForm.reset();
      this.router.navigate(['users'])
    })
  }
  fillFormToUpdate(users: user[]){
    const user = users[0]
    this.registerForm.setValue({
      userCode: user.userCode,
      userFullName: user.userFullName,
      userEmail: user.userEmail,
      userTel: user.userTel,
      userDescription: user.userDescription,
      isUserHavePreviousExperenceInYolo: user.isUserHavePreviousExperenceInYolo,
      isUserEstonianCitizen: user.isUserEstonianCitizen,
      userBOD: user.userBOD
    })
  }
}
