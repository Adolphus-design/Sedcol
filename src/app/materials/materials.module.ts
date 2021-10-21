import { NgModule } from '@angular/core';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import { AngularFileUploaderModule } from "angular-file-uploader";

const material = [
  MatTabsModule,
  MatButtonModule,
  AngularFileUploaderModule
]

@NgModule({
  exports: [material],
  imports: [material]
})
export class MaterialsModule { }
