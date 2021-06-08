import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StructureModule } from './structure/structure.module';
import { ProductListComponent } from './structure/product-list/product-list.component'
import { ProductService } from './structure/product-list/product-list.service';
import { ProductCompareComponent } from './structure/product-compare/product-compare.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductCompareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StructureModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
