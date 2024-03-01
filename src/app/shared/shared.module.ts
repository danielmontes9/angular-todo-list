import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';

import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFormModule } from 'ng-zorro-antd/form';


const components: any[] = [];
const modules: any[] = [
  CommonModule,
  ReactiveFormsModule,

  NzTypographyModule, 
  NzGridModule,
  NzSpaceModule, 
  NzIconModule,
  NzButtonModule,
  NzCardModule,
  NzFormModule,
];


@NgModule({
  declarations: [...components],
  imports: [
    ...modules
  ],
  exports: [
    ...components,
    ...modules
  ]
})
export class SharedModule { }
