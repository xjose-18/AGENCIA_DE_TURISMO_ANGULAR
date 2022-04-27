import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { DetallePlan } from '../models/planes.model';

@Injectable({
  providedIn: 'root'
})
export class DetallePlanService {
  private message = new ReplaySubject<number>(1);
  /*
  titulo: string = "";
    presio: number = 0;
    Descripcion: string = "";
    imagen: string ="";
    incluye: string[] = [];
    iimportante: string = "";
  */

  planes: DetallePlan[] = [
    {
      id: 1,
      titulo: 'Parque tayrona',
      precio: '$310.000',
      descripcion: 'Esta bahia está ubicada a 35 minutos del rodadero en uno de los sectores del parque Tayrona, haciendo un panorámico por la ciudad de santa marta, una playa arborizada, con agua cristalina ideal para practicar la actividad del careteo o snorkling y un delicioso almuerzo típico de la región.',
      imagen: 'https://i.ibb.co/9HF3DYB/parque-tayrona.jpg" alt="parque-tayrona',
      incluye: [
        'Transporte terrestre',
        'Recogida en hoteles ubicados en el Rodadero,',
        'o centro historico Santa Marta se da un punto de encuentro,',
        'otros sectores preguntar lugar de encuentro.',
        'Pasadia en Bahia concha,',
        'sector de Parque Tayrona.',
        'Guía durante el recorrido',
      ],
      
      importante:[
        'SALIDAS:  Todos los dias  8:00am aprox',
        
        'REGRESO: 4:30pm aproximadamente',
        'Se recomienda llevar vestido de baño, bloqueador solar, repelente, zapatos para agua y careta o snorkel y ropa de cambio.',
        'Recomendamos realizar el recorrido con zapatos cómodos, ropa ligera, llevar agua, gorra o sombrero.'
      ],
      
       
      duracion: '24h',
      imgg: 'https://i.ibb.co/KDpqjpr/imagesas.jpg" alt="imagesas',
      imgg2:'https://i.ibb.co/K7Xgzgx/imagesssss.jpg" alt="imagesssss',
      imgg3:'https://i.ibb.co/GCZWgWR/Imagen4.png" alt="Imagen4',
    },
    {
      id: 2,
      titulo: 'inca inca',
      precio: '$60.000',
      descripcion: 'Hermosa y Tranquila son algunos de los atractivos de la playa Inca inca, Un lugar para descansar, tomar el sol y disfrutar de la comida de mar en La Pikua Express Se encuentra a 8 minutos en lancha desde el Rodadero con este plan saliendo de los muelles Rodadero Norte o Rodadero Sur.',
      imagen: 'https://i.ibb.co/8cqcrbf/Playa-Inka-Inka-Santa-Marta.jpg" alt="Playa-Inka-Inka-Santa-Marta"',
      incluye: [
        'Teoria',
        'caminata submarina',
        'comida para peces',
        'etc',
      ],
      importante:[
        'SALIDAS:  Todos los dias  8:00am aprox',
        
      ],
      duracion: '8h',
      imgg: 'https://www.elinformador.com.co/images/stories/revistas/AULAUNIVERSITARIA2021/MARZO/30inca_2.jpeg ',
      imgg2:'https://i.ibb.co/9YwS47f/Playa-inca-inca-santa-marta-870x555.png" alt="Playa-inca-inca-santa-marta-870x555" ',
      imgg3:'https://i.ibb.co/3NTgygP/descarga-inca.jpg" alt="descarga-inca',
    },
    {
      id: 3,
      titulo: 'San Andres',
      precio: '$190.000',
      descripcion: 'Vuele por lo cielos de san andres y observe el magnifico mar de 7 colores, disfrute de esta gran aventura donde podrá observar toda la isla desde las alturas observando paisajes únicos y experimentando adrenalina a bordo del equipo más moderno y seguro para vuelos recreativos en paracaídas. ',
      imagen: 'https://i.ibb.co/GRkHYKP/ecc404e8-9a99-46b0-a56a-ead992b5166e.png" alt="ecc404e8-9a99-46b0-a56a-ead992b5166e',
      incluye: [
        'Teoria',
        'caminata submarina',
        'comida para peces',
        'etc',
      ],
      importante:[
        'SALIDAS:  Todos los dias  8:00am aprox'
      ],
      duracion: '6h',
      imgg: 'https://i.ibb.co/16DrXbb/image-175.jpg" alt="image-175',
      imgg2:'https://i.ibb.co/W05FVxH/3415-Isla-de-San-Andres.jpg" alt="3415-Isla-de-San-Andres',
      imgg3:'https://i.ibb.co/gPbp3GD/eu6pihaxeaectxo.jpg" alt="eu6pihaxeaectxo',
    },
    {
      id: 4,
      titulo: 'playa blanca',
      precio: '$90.000',
      descripcion: 'Recorrido en lancha de 10 minutos, desde la Bahía del Rodadero hasta Playa Blanca para disfrutar de un baño de mar durante el dia. Esta playa es considerablemente menos visitada, a decir verdad, lo que le obsequia el atributo ideal para que pases un espectacular día en familia.',
      imagen: 'https://i.ibb.co/d0fvjn1/Como-Llegar-a-Playa-Blanca-Acuario-Santa-Marta-Chip-Viajero-10.jpg" alt="Como-Llegar-a-Playa-Blanca-Acuario-Santa-Marta-Chip-Viajero-10',
      incluye: [
        'Teoria',
        'caminata submarina',
        'comida para peces',
        'etc',
      ],
      importante:[
        'SALIDAS:  Todos los dias  8:00am aprox',
        ''
      ],
      duracion: '5h',
      imgg: 'https://i.ibb.co/59NwQ2k/descarga-1-blanca.jpg" alt="descarga-1-blanca',
      imgg2:'https://i.ibb.co/Y2Hg8VC/descarga-1-cblanaaa.jpg" alt="descarga-1-cblanaaa',
      imgg3:'https://i.ibb.co/9GpGDWw/descarga.jpg" alt="descarga',
    },
    {
      id: 5,
      titulo: 'CABO DE LA VELA',
      precio: '$330.000',
      descripcion: 'Salida a las 4:30 a.m. Traslado hasta Riohacha, llegando a las 7:30 a.m. para desayunar. A las 8:30 a.m. Salida hacia el Cabo de la Vela por la vía que conduce a Maicao y tomando la desviación en “cuatrovias” hacia Uribia, estando en Uribia tomamos la desviación a mano izquierda hacia Manaure.',
      imagen: 'https://i.ibb.co/SnDZ7dV/guia-de-viajes-colombia-como-visitar-a-cabo-de-la-vela-la-guajira.jpg" alt="guia-de-viajes-colombia-como-visitar-a-cabo-de-la-vela-la-guajira',
      incluye: [
        'Teoria',
        'caminata submarina',
        'comida para peces',
        'etc',
      ],
      importante:[
        'SALIDAS:  Todos los dias  8:00am aprox'
      ],
      duracion: '12h',
      imgg: 'https://i.ibb.co/ryCNvBf/Playas-cabo-de-la-vela-guajira-870x555.jpg" alt="Playas-cabo-de-la-vela-guajira-870x555" ',
      imgg2:'https://i.ibb.co/BZm1FJF/245-C5-EB6-731-E-4-B8-D-BE47-5134-BAA9-AFA6.jpg" alt="245-C5-EB6-731-E-4-B8-D-BE47-5134-BAA9-AFA6" ',
      imgg3:'https://i.ibb.co/W3w9d9V/cabo-de-la-vela-la-guajira-colombia.jpg" alt="cabo-de-la-vela-la-guajira-colombia"',
    },
    {
      id: 6,
      titulo: 'taganga',
      precio: '$70.000',
      descripcion: 'Recorrido por la ciudad de Santa Marta, pasando por los sitios de interés histórico como la Quinta de san pedro alejandrino última morada del Libertador Simón Bolívar, las principales avenidas, la estatua del Pibe Valderrama jugador de fútbol, el mirador de taganga y la parte comercial de ciudad para hacer compras.',
      imagen: 'https://i.ibb.co/q7gB7pq/taganga.jpg" alt="taganga',
      incluye: [
        'Teoria',
        'caminata submarina',
        'comida para peces',
        'etc',
      ],
      importante:[
        'SALIDAS:  Todos los dias  8:00am aprox'
      ],
      duracion: '10h',
      imgg: 'https://i.ibb.co/jgL25c3/taganga-and-playa-grande.jpg" alt="taganga-and-playa-grande" ',
      imgg2:'https://i.ibb.co/DgGfFCC/Taganga-Playa.jpg" alt="Taganga-Playa"',
      imgg3:'https://i.ibb.co/nPZDW2G/1593948679-779177-1593948837-noticia-normal.jpg" alt="1593948679-779177-1593948837-noticia-normal" ',
    }

    
  ];

  constructor() { }

  getPlanes(): DetallePlan[]{
    return this.planes;
  }

  public get recibir() {
    return this.message.asObservable()
  }

  public enviar(id: number): void {
    this.message.next(id);
  }
}
