import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { firstValueFrom } from 'rxjs';
import { Auth } from 'src/app/interface/auth';
import { ApiService } from 'src/app/services/api.service';
import { ToastrService } from 'ngx-toastr';
import { EncryptionService } from 'src/app/services/encryption/encryption.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginform: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  submitted = false;

  constructor(private formBuilder: FormBuilder,private api:ApiService,private toaster : ToastrService,private encryptionService:EncryptionService,private router:Router) {}

  ngOnInit(): void {
    this.loginform = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(40),
        ],
      ],
    });
  }

  get f(): { [key: string]: AbstractControl } {
    return this.loginform.controls;
  }

  async handelLogin(){
    this.submitted = true
    let req = this.loginform.value
    
    if(this.loginform.invalid){
      return;
    }
    console.log("Sample data",req);
    
    // let encypted = this.encryptionService.encryptUsingAES256(this.loginform.value)
    // console.log("encrypted",encypted);

    // let decrypted  = this.encryptionService.decryptUsingAES256(data)
    // console.log("decrypted data",decrypted);
    
  // console.log(encypted);
  
    
    let res = await firstValueFrom<Auth>(this.api.post('/auth/login',this.loginform.value)).catch((err)=>{
    this.toaster.warning(err)
    })
    if(res){
      
      this.toaster.success('Successfull')
      this.router.navigate(['home'])
    }
    
    
  }
}
