import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  search: string = '';
  searchForm;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ''
    });
  }

  onSubmit(movieName) {
    this.search = movieName;
    console.log(this.search);
    this.searchForm.reset();
  }

  onKeyUp(event: any) { // without type info
    if (event.target.value) {
      this.search = event.target.value;
      console.log(this.search);
    }
  }
}
