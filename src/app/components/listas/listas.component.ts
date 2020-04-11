import { Component, OnInit,Input, ViewChild } from '@angular/core';
import { DeseosService } from 'src/app/services/deseos.service';
import {Router} from '@angular/router';
import { Lista } from 'src/app/models/lista.model';
import { AlertController, IonList} from '@ionic/angular';

@Component({
  selector: 'app-listas',
  templateUrl: './listas.component.html',
  styleUrls: ['./listas.component.scss'],
})
export class ListasComponent implements OnInit {

  @Input( ) terminada = true;
  @ViewChild( IonList, {static:true}) lista: IonList;

  constructor(public deseosService: DeseosService,
    private router:Router,
    private alertCtrl:AlertController) 
  {
    
  }

  listaSeleccionada(lista)
  {
    if(this.terminada === true)
    {
      this.router.navigateByUrl(`/tabs/tab2/agregar/${ lista.id}`); 
    }else{
      this.router.navigateByUrl(`/tabs/tab1/agregar/${ lista.id}`); 
    }
   
  }

  borrarLista( lista: Lista )
  {
    this.deseosService.borrarLista(lista);
  }

 async editarLista(lista: Lista)
  {

    const alert  = await this.alertCtrl.create({
      header: 'Editar Lista ',
      inputs:
      [
        {
          name: 'titulo',
          type: 'text',
          value: lista.titulo,
          placeholder:'Nombre de la lista'
        }
      ],
      buttons: 
      [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () =>{
            console.log('Cancelar');
            this.lista.closeSlidingItems();
          }
        },
        {
          text:'Aceptar',
          handler: (data) =>{
            console.log(data);
            if(data.tittulo === 0)
            {

              return;
            }else
            {
              lista.titulo = data.titulo;
              this.deseosService.guardarStorage();
              this.lista.closeSlidingItems();
            }
          }
        }
      ]

    });

    await alert.present();
  }

  
  ngOnInit() {}

}
