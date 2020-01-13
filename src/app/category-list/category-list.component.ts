import { Component, OnInit } from '@angular/core';
import {CategoryService} from '../category.service';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories = [];
  catgory = {};
  private check: boolean = false;
  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories(): void {
    this.categoryService.getCategories().subscribe(categories => this.categories = categories);
    console.log(this.categories);
  }
}
