import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroupDirective, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import {RequestService} from '../../services/request.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Input() allCategories:any;
  constructor(
    private formBuilder: FormBuilder,
    private RequestService: RequestService,
    private snack:MatSnackBar,
  ) { }

  productForm= this.formBuilder.group({
    productName:['',[Validators.required]],
    description:['',[Validators.required]],
    price:['',[Validators.required]],
    measurement:['',[Validators.required]],
    idCategory:['',[Validators.required]],
    
  });
  measurements:any=[
    {value:"Kilogramo",name:"Kilogramo(Kg)"},
    {value:"Gramo",name:"Gramo(g)"},
    {value:"Metro",name:"Metro(m)"},
    {value:"Litro",name:"Litro(l)"},
    {value:"Mililitro",name:"Mililitro(ml)"},
    {value:"Unidad",name:"Unidad(u)"},
    {value:"Docena",name:"Docena"},
    ]
  ngOnInit(): void {
  }

  

  saveProduct(product,formDirective: FormGroupDirective){
    this.RequestService.post('http://localhost:8080/api/category/createCategory/',product).subscribe({
      next:()=>{
        this.snack.open('Categoria registrada exitosamente.','CERRAR',{duration:5000,panelClass:'snackSuccess',})
       window.location.reload();
       /* console.log(category)
       console.log('http://localhost:8080/api/category/createCategory/'+this.idStore)
     */
      },
      error:()=>{
        this.snack.open('Fallo al registrar la categoria','CERRAR',{duration:5000});
        
      }
    })
  }
}
