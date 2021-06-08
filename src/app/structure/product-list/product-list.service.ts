import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { ProductDetails } from './ProductDetails'

@Injectable()
export class ProductService {

    constructor(private http: HttpClient) { }

    GetProductData() {
        return this.http.get<ProductDetails>(`http://localhost:8080/all`);
    }

}
