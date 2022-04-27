import { Injectable } from '@angular/core';
import { Producto } from '../models/product.model';
import { ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class CarritoService {

  private message = new ReplaySubject<number>(1);

  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Producto 1',
      precio: 100,
      img: 'https://picsum.photos/200/300/?random'
    },
    {
      id: 2,
      nombre: 'Producto 2',
      precio: 200,
      img: 'https://picsum.photos/200/300/?random'
    },
    {
      id: 3,
      nombre: 'Producto 3',
      precio: 300,
      img: 'https://picsum.photos/200/300/?random'
    },
    {
      id: 4,
      nombre: 'Producto 4',
      precio: 400,
      img: 'https://picsum.photos/200/300/?random'
    },
    {
      id: 5,
      nombre: 'Producto 5',
      precio: 500,
      img: 'https://picsum.photos/200/300/?random'
    }
  ];

  constructor() { }

  getProductos(): Producto[] {
    return this.productos;
  }

  

}
