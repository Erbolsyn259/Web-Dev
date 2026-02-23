import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Output() categorySelected = new EventEmitter<number>();
  
  categories: Category[] = [];
  selectedCategoryId: number = 1; // По умолчанию выбираем первую категорию

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.categorySelected.emit(categoryId);
  }
}