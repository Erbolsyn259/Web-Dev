import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 2,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 3,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 4,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 5,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 6,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 7,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 8,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 9,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
    {
      id: 10,
      name: 'Coca-Cola',
      description: 'Coca-Cola газированный напиток кола 1 л',
      price: 665,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h39/h36/85448954707998.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pbb/pee/97763098.jpg?format=gallery-large'
      ],
      link: 'https://kaspi.kz/shop/p/coca-cola-classic-gazirovannyi-napitok-1-l-100208096/?c=750000000'
    },
  ];

  Math = Math; // Для использования Math в шаблоне
}