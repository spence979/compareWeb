import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from './product-list.service'
import { ProductDetails } from './ProductDetails'

import { ProductCompareComponent } from '../product-compare/product-compare.component'

import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  //providers: [NgbModalConfig, NgbModal]
})
export class ProductListComponent implements OnInit {

  @Input() childProperty: any;

  productList: ProductDetails[];
  productListFiltered: ProductDetails[];
  filter: any;

  constructor(private _productService: ProductService, private modalService: NgbModal) {
      this.productList = [];
      this.productListFiltered = [];
      this.filter = null;
  }


  ngOnChanges(changes: any): void {

      if(this.productList.length > 0){
          if(changes.childProperty.currentValue == null){
            this.filter = null;
            this.productListFiltered = this.productList;
          } else {
            this.filter = changes.childProperty.currentValue;
            this.productListFiltered = this.productList
              .filter((r: any) =>
                  r.name.toLowerCase().includes(changes.childProperty.currentValue.toLowerCase()) ||
                  r.description.toLowerCase().includes(changes.childProperty.currentValue.toLowerCase()) ||
                  r.productDetailsList.filter((detail: any) => detail.name.toLowerCase().includes(changes.childProperty.currentValue.toLowerCase())).length > 0);
          }
      }
  }

  ngOnInit(): void {
    this._productService.GetProductData().subscribe((data: any) => {
      this.productList = data;
      this.productListFiltered = data;
    })
  }

  goToLink(url: string){
      window.open(url, "_blank");
  }

  biomarkers(data: any){
    return data.productDetailsList.filter((r: any) => r.type == 'biomarkers');
  }

  collectionMethod(data: any){
    return data.productDetailsList.filter((r: any) => r.type == 'collectionMethod');
  }

  collectionSymptoms(data: any){
    return data.productDetailsList.filter((r: any) => r.type == 'symptoms');
  }

  open() {

    let selectedItems = this.productListFiltered.filter(r => r.selected);


   const modalRef = this.modalService.open(ProductCompareComponent, { size: 'xl' });
   modalRef.componentInstance.name = 'World';
   modalRef.componentInstance.data = selectedItems;
  }


}
