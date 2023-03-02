import { reqService } from './../../../shared/services/request.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { regexCpf } from 'src/app/shared/utils/regexCpf';
import { user } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit{
  userActive = false;
  error = false;
  message = false;
  userInfo?:user;
  cpfCombination = regexCpf;
  formBuilder: any;
  form!: FormGroup;

  constructor(public userServer: reqService){}

  ngOnInit(): void {
    console.log(this.cpfCombination)
  }

  createForm() {
    this.form = this.formBuilder.group({
      cpf: [null, [Validators.required, Validators.pattern(this.cpfCombination)]]
    })
  }

  onSubmit(cpf:string){
    console.log(cpf)
    this.getUserByCpf(cpf)
  }

  public getUserByCpf(cpf:string){
    this.userServer.getUserByCpf(cpf).subscribe({
      next:(data:any)=>{
        this.userInfo = data[0]

        if(!this.userInfo){
          this.message = true;
          return
        }

        this.userActive = true;
        this.message = false;

      },
      error(err:any) {
        console.log('Erro ao procurar o CPF')
      },
    })
  }

}
