import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductItemComponent } from '../product-item/product-item.component';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductItemComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  @Input() products: Product[] = [];
  @Input() categoryName: string = '';
  
  searchQuery: string = '';
  filteredProducts: Product[] = [];

  ngOnChanges() {
    this.filterProducts();
  }

  onDeleteProduct(productId: number) {
    const index = this.products.findIndex(p => p.id === productId);
    if (index !== -1) {
      this.products.splice(index, 1);
      this.filterProducts(); 
    }
  }

  onLikeProduct(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.likes += 1;
    }
  }

  filterProducts(): void {
    if (!this.products) {
      this.filteredProducts = [];
      return;
    }

    const query = this.searchQuery.toLowerCase().trim();
    if (query === '') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(product =>
        product.name.toLowerCase().includes(query)
      );
    }
  }

  onSearchInput(): void {
    this.filterProducts();
  }

  getShowingCount(): string {
    return `Showing: ${this.filteredProducts.length}/${this.products.length} products`;
  }
}