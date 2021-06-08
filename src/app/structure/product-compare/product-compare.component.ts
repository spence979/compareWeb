import { Component, OnInit, Input} from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-product-compare',
  templateUrl: './product-compare.component.html',
  styleUrls: ['./product-compare.component.css']
})
export class ProductCompareComponent implements OnInit {
  @Input() name: any;
  @Input() data: any;

  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {

  }

    biomarkers(data: any){
      return data.productDetailsList.filter((r: any) => r.type == 'biomarkers');
    }

    collectionMethod(data: any){
      return data.productDetailsList.filter((r: any) => r.type == 'collectionMethod');
    }

}
