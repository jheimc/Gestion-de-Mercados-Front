import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-register-sector',
  templateUrl: './register-sector.component.html',
  styleUrls: ['./register-sector.component.css']
})
export class RegisterSectorComponent implements OnInit {

  constructor(
    private formBuilder: FormBuilder,
    private RequestService: RequestService,
    private snack:MatSnackBar,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  registerSector= this.formBuilder.group({
    sectorName:['',[Validators.required]],

  });
  ngOnInit(): void {
  }
  saveSector(sector,formDirective: FormGroupDirective){
    console.log("Esta es el sector a Registrar",sector);
    
    this.RequestService.post('http://localhost:8080/api/sector/createSector', sector)
    .subscribe({
      next:()=>{
        console.log('Sector creado exitosamente!!');
        this.snack.open('Sector registrado exitosamente.','CERRAR',{duration:5000,panelClass:'snackSuccess',})
        window.location.reload();
      },
      error:()=>{
        console.log('Ocurrio un error, no se creo la cotizacon.');
        this.snack.open('Fallo al registrar el Sector','CERRAR',{duration:5000})
      }
    });
  }

}
