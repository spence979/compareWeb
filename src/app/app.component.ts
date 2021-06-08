import { Component, Output, EventEmitter  } from '@angular/core';
import { Router } from "@angular/router";
import { ProductListComponent } from './structure/product-list/product-list.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'compare';
    searchTerm: any = null
    searchTermTemp: any = null

    applyFilter(){
      this.searchTerm = this.searchTermTemp
    }

    clearFilter(){
      this.searchTerm = null;
      this.searchTermTemp = null;
    }

}
